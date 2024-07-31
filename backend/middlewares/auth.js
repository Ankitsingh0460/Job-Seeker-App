import jwt from "jsonwebtoken";
import { catchAsyncError } from "./catchAsyncError";
import { User } from "../models/userModel.js";

export const isAuthorised = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("USer is not authorized", 400));
  }
  const decode = jwt.verify(token, process.env.SECRET);
  req.user = await User.findById(decode.id);
  next();
});
