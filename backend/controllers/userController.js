import { User } from "../models/userModel.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";

export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, password, phone, role } = req.body;
  if (!name || !email || !phone || !password || !role) {
    return next(new ErrorHandler("Please Fill Full Registration Form"));
  }
  const isEmail = await User.findOne(email);
  if (isEmail) {
    return next(new ErrorHandler("Email is Alreday Exist"));
  }
  const user = await User.create({
    name,
    email,
    password,
    phone,
    role,
  });
  res.status(200).json({
    success: true,
    message: "User Ragister",
    user,
  });
});
