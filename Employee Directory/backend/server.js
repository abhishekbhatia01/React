const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/employees", require("./routes/employeeRoutes"));
app.use("/api/users", require("./routes/UserRouter"));
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(process.env.PORT, () => {
      console.log(`Server Running on ${process.env.PORT}`);
    });
  })
  .catch(console.log);
