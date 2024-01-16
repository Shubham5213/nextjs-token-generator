const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};
connectDB();

const app = express();
app.use(
  cors({
    origin: ["https://gencod-shubham5213.vercel.app"],
  })
);
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/codes", require("./appRoutes"));

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
