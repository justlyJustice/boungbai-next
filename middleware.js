import { toast } from "react-toastify";
import { NextResponse } from "next/server";

export default function middleware(req) {
  let verified = req.cookies.get("adminCookie");
  let url = req.url;

  if (!verified && url.includes("/dashboard")) {
    return NextResponse.redirect("http://localhost:3000/");
  }
}
