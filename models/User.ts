import mongoose from "mongoose";
import { SignJWT } from "jose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      minlength: 5,
      maxlength: 255,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 5,
      maxlength: 1024,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    savedCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true }
);

// Generating user authentication token
userSchema.methods.generateAuthToken = async function () {
  const secret = new TextEncoder().encode(
    "cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2"
  );

  const token = await new SignJWT({
    id: this.id,
    name: this.name,
    email: this.email,
    isAdmin: this.isAdmin,
    savedCourses: this.savedCourses,
  })
    .setProtectedHeader({ alg: "HS256" }) // Specify the algorithm
    .setIssuedAt() // Set the issued at time
    .setExpirationTime("1h") // Set the expiration time
    .sign(secret);
  // const token = jwt.sign(
  //   ,
  //   process.env.JWT_KEY!
  // );
  return token;
};

export default mongoose.models.User || mongoose.model("User", userSchema);
