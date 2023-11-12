import slugify from "slugify";
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: [
        "Graphic Design",
        "Web Development & Hosting",
        "Mobile App Development",
        "Cyber Security",
        "IC3 Digital",
        "Cloud Computing",
        "Programming",
      ],
      required: [true, "Category name is required"],
    },
    slug: String,
    image: {
      type: String,
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true }
);

// Slugify our category-name to get a slug value
categorySchema.pre("validate", function () {
  if (this.name) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
});

export default mongoose.models.Category ||
  mongoose.model("Category", categorySchema);
