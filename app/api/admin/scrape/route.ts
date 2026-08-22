import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { keyword, location, radius, unit, targetType } = body;

    const ghOwner = process.env.GH_OWNER;
    const ghRepo = process.env.GH_REPO;
    const ghPat = process.env.GH_PAT;

    if (!ghOwner || !ghRepo || !ghPat) {
      return NextResponse.json(
        { error: "Missing GitHub credentials in environment variables." },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api.github.com/repos/${ghOwner}/${ghRepo}/dispatches`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${ghPat}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event_type: "run-gmaps-scraper",
          client_payload: {
            keyword,
            location,
            radius,
            unit,
            targetType,
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("GitHub Dispatch Error:", errText);
      return NextResponse.json({ error: "Failed to dispatch GitHub Action" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Scraper task dispatched." });
  } catch (error) {
    console.error("Scraper API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}