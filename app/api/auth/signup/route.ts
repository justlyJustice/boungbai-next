import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

import User from "@/models/User";
import connectDB from "@/lib/connectDb";

export const POST = async (req: NextRequest, res: NextResponse) => {
  await connectDB();

  const body = await req.json();

  let user = await User.findOne({ email: body.email });

  if (user)
    return NextResponse.json(
      {
        success: false,
        message: "Error! User already exists.",
      },
      { status: 400 }
    );
  else {
    user = await User.create(body);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = user.generateAuthToken();

    return NextResponse.json({
      success: true,
      token,
    });
  }
};
