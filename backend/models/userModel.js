import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your Name"],
      minLength: [3, "Name must contain at leat 3 charecter"],
      maxLength: [30, "Name cannot exceed more than 30 charecter"],
    },
    email: {
      type: String,
      required: [true, "Please provide Email"],
      validate: [validator.isEmail, "Please provide a valid Email"],
    },
    phone: {
      type: Number,
      required: [true, "Please provide the valid phone number"],
    },
    password: {
      type: String,
      required: [true, "Please prove a poassword"],
      minLength: [3, "Name must contain at leat 3 charecter"],
      maxLength: [30, "Name cannot exceed more than 30 charecter"],
      select: false,
    },
    role: {
      type: String,
      required: [true, "Please provide your role"],
      enum: ["Job Seeker", "Employer"],
    },
    createdAt: {
      type: String,
      default: Date.now,
    },
  },
  { timestamps: true }
);

//Hassing password

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//Compare password

userSchema.methods.comparepassword = async function (enterpassword) {
  return await bcrypt.compare(enterpassword, this.password);
};

//Genrate jwt Tokken

userSchema.methods.getToken = function () {
  return jwt.sign({ id: this._id }, process.env.SECRET);
};

export const User = mongoose.model("User", userSchema);
