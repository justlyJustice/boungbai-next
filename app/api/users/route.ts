import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/lib/connectDb";

export const GET = async (req: NextRequest, res: NextResponse) => {
  // await connectDB();

  // const users = await User.find();

  return NextResponse.json("users");
};
