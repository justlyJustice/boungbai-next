import slugify from "slugify";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 3,
      required: [true, "Course name is required"],
      trim: true,
    },
    slug: {
      type: String,
    },
    author: {
      type: String,
      required: [true, "Course author is required"],
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      // required: function () {
      //   return this.;
      // },
      get: (v: number) => Math.round(v),
      set: (v: number) => Math.round(v),
    },
    description: {
      type: String,
      minlength: 5,
      required: [true, "Course description is required"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    image: {
      type: String,
    },
    lectures: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lecture",
      },
    ],
  },
  { timestamps: true }
);

// Slugify our course-name to get a slug value
courseSchema.pre("validate", function () {
  if (this.name) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
});

export default mongoose.models.Course || mongoose.model("Course", courseSchema);
