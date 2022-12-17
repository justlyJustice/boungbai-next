import { NextResponse } from "next/server";

export default function middleware(req) {
  let adminVerified = req.cookies.get("adminCookie");
  let verifiedUser = req.cookies.get("userCookie");
  let url = req.url;

  if (verifiedUser && url.includes("/auth/user")) {
    return NextResponse.redirect("http://localhost:3000/courses");
  }

  if (!adminVerified && url.includes("/dashboard")) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (adminVerified && url === "/auth/admin") {
    return NextResponse.redirect("http://localhost:3000/dashboard");
  }
}
