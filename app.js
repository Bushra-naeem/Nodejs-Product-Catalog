import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/connectdb.js";
import mongoose from "mongoose";
import Product from "./models/Product.js";
import productRouter from "./routes/product.js";

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

connectDB(DATABASE_URL);

app.use(express.json());
app.use(productRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
