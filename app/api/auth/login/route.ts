import { NextRequest, NextResponse } from "next/server";

import bcrypt from "bcrypt";

import User from "@/models/User";
import connectDB from "@/lib/connectDb";

export const POST = async (req: NextRequest, res: NextResponse) => {
  await connectDB();

  const body = await req.json();

  const user = await User.findOne({ email: body.email });
  if (!user)
    return NextResponse.json("Invalid email/password combination!", {
      status: 400,
    });

  const password = await bcrypt.compare(body.password, user.password);

  if (!password)
    return NextResponse.json("Invalid password provided! please try again.", {
      status: 400,
    });

  const token = user.generateAuthToken();

  return NextResponse.json(
    {
      token,
    },
    {
      headers: {
        "Set-Cookie": `token=${token}`,
      },
    }
  );
};
