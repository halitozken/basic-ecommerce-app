import mongoose from "mongoose";

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],

  createdAt: Date,

  updateAt: Date,
});

export default mongoose.model("Order", OrderSchema);

