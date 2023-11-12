import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const auth = request.headers.get("authorization");
  const jwtToken = auth?.split(" ")[1];

  if (!jwtToken)
    return NextResponse.json(
      {
        success: false,
        message: "You need to login to access this route!",
      },
      { status: 401 }
    );

  const secret = new TextEncoder().encode(
    "cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2"
  );

  const { payload, protectedHeader } = await jwtVerify(jwtToken, secret, {
    issuer: "urn:example:issuer",
    audience: "urn:example:audience",
  });

  console.log(payload);
  console.log(protectedHeader);

  return NextResponse.next();

  // if (request.nextUrl.pathname === "/api/users" && request.method === "GET") {
  //   return NextResponse.next();
  // }
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
