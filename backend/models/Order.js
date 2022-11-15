import mongoose from "mongoose";

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  products: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Products", required: true },
  ],

  createdAt: Date,

  updateAt: Date,
});

const OrderModel = mongoose.model("Order", OrderSchema);
export default OrderModel;
