import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id: {
    type: "Number",
  },

  productName: {
    type: String,
  },

  categoryId: {
    type: String,
    // ref: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Category",
    // },
  },

  unitPrice: {
    type: String,
  },

  quantityPerUnit: {
    type: String,
  },

  unitsInStock: {
    type: String,
  },
});

export default mongoose.model("Product", ProductSchema);

