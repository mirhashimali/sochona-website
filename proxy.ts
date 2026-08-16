import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLeadsPage = pathname.startsWith("/admin/leads");
  const isLoginPage = pathname === "/admin/leads/login";
  const isProtectedApi =
    pathname.startsWith("/api/admin/leads") || pathname.startsWith("/api/admin/receipt");

  if ((isLeadsPage && !isLoginPage) || isProtectedApi) {
    const session = request.cookies.get("leads_session");
    if (!session || session.value !== process.env.LEADS_SESSION_SECRET) {
      if (isProtectedApi) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      return NextResponse.redirect(new URL("/admin/leads/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/leads/:path*", "/api/admin/leads/:path*", "/api/admin/receipt/:path*"],
};