import { NextResponse, NextRequest } from "next/server";
import path from "path";

import Post from "@/models/Post";
import connectDB from "@/lib/connectDb";

// @DESC    Get all posts
// @ROUTE   /api/posts
// @ACCESS  Public
export const GET = async (req: NextRequest, res: NextResponse) => {
  await connectDB();

  const posts = await Post.find();

  if (posts.length <= 0)
    return NextResponse.json(
      { success: true, message: "No posts yet!" },
      { status: 404 }
    );

  return NextResponse.json({ data: posts, success: true });
};

// @DESC    Create a new post
// @ROUTE   /api/posts
// @ACCESS  Private
export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();

  await connectDB();

  let post = new Post({
    title: body.title,
    desc: body.desc,
    image: "",
  });

  await post.save();

  return NextResponse.json({ post }, { status: 201 });
};

// router.post(
//   "/",
//   ensureToken,
//   multerUploads.single("file"),
//   cloudinaryConfig,
//   asyncHandler(async (req, res) => {
//     const file = datauri(req);

//     cloudinary.uploader.upload(file.content, async (err, result) => {
//       if (err) throw err;

//   })
// );
