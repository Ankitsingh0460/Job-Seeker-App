export const sendToken = (user, statusCode, res, message) => {
  const token = user.getToken();

  res.status(statusCode).cookie("token", token).json({
    success: true,
    user,
    message,
    token,
  });
};
