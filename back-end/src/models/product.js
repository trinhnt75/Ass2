import mongoose from "mongoose";
const { Schema } = mongoose;
const productSchema = new Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  original_price: {
    type: Number,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
});
export default mongoose.model("Product", productSchema);
