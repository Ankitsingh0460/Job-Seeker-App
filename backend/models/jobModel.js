import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide job title"],
      minLength: [3, "Job title must be 3 charactor"],
      maxLength: [50, "Job title not exceed than 50 charactor"],
    },
    description: {
      type: String,
      required: [true, "Please provide job Description"],
      minLength: [3, "Job  Description must be 3 charactor"],
      maxLength: [100, "Job Description not exceed than 50 charactor"],
    },
    category: {
      type: String,
      required: [true, "job category is required"],
    },
    country: {
      type: String,
      required: [true, "job country is required"],
    },
    city: {
      type: String,
      required: [true, "job city is required"],
    },
    location: {
      type: String,
      required: [true, "job location is required"],
      minLength: [2, "min length is 10 character"],
    },
    fixedSalary: {
      type: Number,
      minLength: [4, "sallery must contain 4 digit"],
      maxLength: [9, "sallery must contain 9 digit"],
    },
    salaryFrom: {
      type: Number,
      minLength: [4, "sallery must contain 4 digit"],
      maxLength: [9, "sallery must contain 9 digit"],
    },
    salaryTo: {
      type: Number,
      minLength: [4, "sallery must contain 4 digit"],
      maxLength: [9, "sallery must contain 9 digit"],
    },
    expire: {
      type: Boolean,
      default: false,
    },
    jobPostedOn: {
      type: Date,
      default: Date.now,
    },
    postedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Job = mongoose.model("jobs", jobSchema);
