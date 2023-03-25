//const express = require('express') //require not in es so use import for that
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"; //name authRoutes given by us
import categoryRoutes from "./routes/categoryRoutes.js"; //name categoryRoutes given by us
import cors from "cors";

//const colors = require('colors')

//Config dotenv
dotenv.config(); // for hiding the credentials  using dotenv.config for sensitive api keys etc.

//databse config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors()); //to avoid cross origin error
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to our ecommerce website!",
  });
});
// PORT
const PORT = process.env.PORT || 8080; // react's port 3000,node generally 8080/8000 ,angular 4200

//to run app means listen
app.listen(PORT, () => {
  console.log(
    `Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  ); //backtick for dynamic
});
