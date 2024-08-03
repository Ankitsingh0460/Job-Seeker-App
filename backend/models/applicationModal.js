import mongoose from "mongoose";
import validator from "validator";

const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Name"],
    minLength: [3, "Name Must be more than 3 chr"],
    maxLength: [10, "Name not exeed 10 chr"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: [validator.isEmail],
  },
  coverLatter: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  resume: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  applicantId: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["Employer"],
    },
  },
});

export const Application = mongoose.model("application", applicationSchema);
