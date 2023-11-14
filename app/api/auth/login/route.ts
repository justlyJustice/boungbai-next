import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

import User from "@/models/User";
import connectDB from "@/lib/connectDb";

export const POST = async (req: NextRequest, res: NextResponse) => {
  await connectDB();

  const body = await req.json();

  const user = await User.findOne({ email: body.email });

  if (!user)
    return NextResponse.json("Invalid email or password combination!", {
      status: 404,
      statusText: "User not found!",
    });

  const password = await bcrypt.compare(body.password, user.password);

  if (!password)
    return NextResponse.json("Invalid password provided! please try again.", {
      status: 400,
      statusText: "Invalid password",
    });

  const token = await user.generateAuthToken();

  return NextResponse.json(
    {
      success: true,
      token,
    },
    { statusText: "Login was successful!" }
  );
};
