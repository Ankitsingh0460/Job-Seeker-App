import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "MERN_JOB_SEEKING",
    })
    .then(() => {
      console.log(`DataBase is connected`);
    })
    .catch((error) => {
      console.log(`Error in Connection in Database${error}`);
    });
};
