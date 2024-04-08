import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get("isLoggedIn");

  if (!isLoggedIn) {
    return NextResponse.next();
  }

  if (
    isLoggedIn.value === "false" &&
    request.nextUrl.pathname.startsWith("/profile")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("previous", "profile");
    return NextResponse.redirect(url);
  }

  if (
    (isLoggedIn.value === "true" &&
      request.nextUrl.pathname.startsWith("/login")) ||
    (isLoggedIn.value === "true" &&
      request.nextUrl.pathname.startsWith("/signup")) ||
    (isLoggedIn.value === "true" &&
      request.nextUrl.pathname.startsWith("/recover"))
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/profile";
    return NextResponse.redirect(url);
  }
}
