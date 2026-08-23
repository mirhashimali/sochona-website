import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { keyword, targetType, location, radius, unit } = body;

    const GH_PAT = process.env.GH_PAT;
    const GH_OWNER = process.env.GH_OWNER || 'mirhashimali';
    const GH_REPO = process.env.GH_REPO || 'sochona-website';

    if (!GH_PAT) {
      return NextResponse.json({ success: false, error: 'Missing GH_PAT environment variable on server.' }, { status: 500 });
    }

    // Dispatch event to GitHub Actions
    const response = await fetch(`https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/dispatches`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GH_PAT}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({
        event_type: 'scrape_gmaps',
        client_payload: {
          keyword,
          targetType,
          location,
          radius,
          unit,
        },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("GitHub Dispatch Failed:", errText);
      return NextResponse.json({ 
        success: false, 
        error: `GitHub rejected dispatch (${response.status}): ${errText}` 
      }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Scraper task successfully dispatched to GitHub!' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}