const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/user")

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("DB Connection successfull"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);


app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});
