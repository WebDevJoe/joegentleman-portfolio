import { NextResponse, type NextRequest } from "next/server";

/**
 * Basic Auth gate. Credentials live in Vercel env vars only — never in source.
 * Remove this file (and the env vars) when you want the site to go fully public.
 */
export function middleware(request: NextRequest) {
  const expectedUser = process.env.BASIC_AUTH_USER;
  const expectedPass = process.env.BASIC_AUTH_PASS;

  // If env vars aren't configured, lock the site entirely.
  if (!expectedUser || !expectedPass) {
    return new NextResponse("Site is gated. Configure BASIC_AUTH_USER and BASIC_AUTH_PASS.", {
      status: 503,
    });
  }

  const header = request.headers.get("authorization");
  if (header?.startsWith("Basic ")) {
    const decoded = atob(header.slice(6));
    const sep = decoded.indexOf(":");
    const user = decoded.slice(0, sep);
    const pass = decoded.slice(sep + 1);
    if (user === expectedUser && pass === expectedPass) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Joe Gentleman — preview", charset="UTF-8"',
    },
  });
}

export const config = {
  // Run on every page request, but skip static assets and Next internals.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|figma/|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|map)$).*)"],
};
