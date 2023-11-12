import slugify from "slugify";
import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Post title is required!"],
      min: 5,
      max: 20,
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Post description is required!"],
      min: 5,
      max: 255,
    },
    slug: String,
    image: {
      type: String,
    },
    postedBy: {
      type: String,
      default: "Admin",
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

postSchema.pre("validate", function () {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
});

export default mongoose.models.Post || mongoose.model("Post", postSchema);
