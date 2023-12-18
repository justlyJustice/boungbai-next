import { NextRequest, NextResponse } from "next/server";

import connectDB from "@/lib/connectDb";
import Category from "@/models/Category";
import { handler } from "@/middleware/handler";

// @DESC    Get categories
// @ROUTE   /api/categories
// @ACCESS  Private
export const GET = async (req: NextRequest, res: NextResponse) => {
  await connectDB();

  const categories = await Category.find().populate("courses");

  return NextResponse.json({
    success: true,
    nbHits: categories.length,
    data: categories,
  });
};

// @DESC    Create a category
// @ROUTE   /api/categories
// @ACCESS  Private

export const POST = async (req: NextRequest, res: NextResponse) => {
  await connectDB();

  const body = (await req.json()) as { name: string; image: string };

  if (!body.name && !body.image)
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request! Must provide name and image for category",
      },
      { status: 400 }
    );

  const category = await Category.create(body);

  return NextResponse.json({ success: true, data: category }, { status: 201 });

  // let category = new Category({
  //   name: body.name,
  //   image: result.secure_url,
  // });

  // await category.save();

  // const file = datauri(req);

  // cloudinary.uploader.upload(file.content, async (err, result) => {
  //   if (err) throw err;

  //   res.status(201).json({ success: true, data: category });
  // });
};

// export const POST = handler(createCategory);
