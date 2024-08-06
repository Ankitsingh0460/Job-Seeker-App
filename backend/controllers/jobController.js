import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Job } from "../models/jobModel.js";

export const getAllJobs = catchAsyncError(async (req, res, next) => {
  const jobs = await Job.find({ expired: false });
  res.status(200).json({
    success: true,
    jobs,
  });
});

export const postJob = catchAsyncError(async (req, res, next) => {
  const { role } = req.user;

  if (!role == "Job Seeker") {
    return next(
      new ErrorHandler("job Seeker is not allow to access this resource", 400)
    );
  }
  const {
    title,
    description,
    category,
    country,
    city,
    location,
    fixedSalary,
    salaryFrom,
    salaryTo,
  } = req.body;
  if (!title || !description || !category || !country || !city || !location) {
    return next(new ErrorHandler("Please provide full job detail", 400));
  }
  if ((!salaryFrom || !salaryTo) && !fixedSalary) {
    return next(
      new ErrorHandler(
        "Please either provide fixed salary or ranged salary.",
        400
      )
    );
  }

  if (salaryFrom && salaryTo && fixedSalary) {
    return next(
      new ErrorHandler("Cannot Enter Fixed and Ranged Salary together.", 400)
    );
  }

  const postedBy = req.user._id;

  const job = await Job.create({
    title,
    description,
    category,
    country,
    city,
    location,
    fixedSalary,
    salaryFrom,
    salaryTo,
    postedBy,
  });
  res.status(200).json({
    success: true,
    job,
    message: "Job Posted Sucessfully",
  });
});

export const getMyJob = catchAsyncError(async (req, res, next) => {
  const { role } = req.user;
  console.log(role);
  if (role == "Job Seeker") {
    return next(
      new ErrorHandler("Job Seeker not allowed to access this resource.", 400)
    );
  }
  const myJob = await Job.find({ postedBy: req.user._id });
  res.status(200).json({
    success: true,
    myJob,
  });
});

export const updateJob = catchAsyncError(async (req, res, next) => {
  const { role } = req.user;
  if (role == "Job Seeker") {
    return next(
      new ErrorHandler("Job Seeker not allowed to access this resource.", 400)
    );
  }

  const { id } = req.params;
  let job = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(201).json({
    success: true,
    job,
    message: "Job Updated",
  });
});

export const deletejob = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) {
    return next(new ErrorHandler("OOPS Job is not found", 404));
  }
  await job.deleteOne();
  res.status(200).json({
    success: true,
    message: "Job Deleted",
  });
});

export const getSingleJob = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  try {
    const job = await Job.findById(id);
    if (!job) {
      return next(new ErrorHandler("Job Not Found", 400));
    }
    res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    return next(new ErrorHandler(`Invalid ID / CastError`, 404));
  }
});
