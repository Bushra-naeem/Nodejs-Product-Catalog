import mongoose from "mongoose";

// Defining schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  expiryDate: {
    type: Date,
  },
  category: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
});

const Product = mongoose.model("product", productSchema);

export default Product;
