import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id: {
    type: Number,
  },

  productName: {
    type: String,
  },

  categoryId: {
    type: Number,
    // ref: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Category",
    // },
  },

  unitPrice: {
    type: Number,
  },

  quantityPerUnit: {
    type: String,
  },

  unitsInStock: {
    type: Number,
  },
});

const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;
