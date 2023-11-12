import { NextRequest, NextResponse } from "next/server";

import Category from "@/models/Category";
import connectDB from "@/lib/connectDb";

// @DESC    Get a category
// @ROUTE   /api/categories/category-name
// @ACCESS  Private
export const GET = async (req: NextRequest, params: { categoryId: string }) => {
  const { categoryId } = params;

  await connectDB();

  const category = await Category.findOne({ slug: categoryId }).populate(
    "courses"
  );

  if (!category)
    return NextResponse.json(
      {
        success: false,
        message: `Category with the given slug ${categoryId} not found`,
      },
      { status: 404 }
    );

  return NextResponse.json({ success: true, data: category });
};

// @DESC    Delete a category
// @ROUTE   /api/category/category-id
// @ACCESS  Private
export const DELETE = async (
  req: NextRequest,
  params: { categoryId: string }
) => {
  const { categoryId } = params;
  await connectDB();

  const category = await Category.findByIdAndRemove({ id: categoryId });

  if (!category)
    return NextResponse.json(
      {
        success: false,
        message: `Category with the given slug ${categoryId} not found!`,
      },
      { status: 404 }
    );

  return NextResponse.json({ success: true, data: category });
};
