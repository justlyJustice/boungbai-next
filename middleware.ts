import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import connectDB from "./lib/connectDb";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // const auth = request.headers.get("authorization");
  // const jwtToken = auth?.split(" ")[1];
  // if (!jwtToken)
  //   return NextResponse.json(
  //     {
  //       success: false,
  //       message: "You need to login to access this route!",
  //     },
  //     { status: 401 }
  //   );
  // return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/api/categories/:path",
    "/api/categories",
    "/api/courses",
    "/api/users",
  ],
};
