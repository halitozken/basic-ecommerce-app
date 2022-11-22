import asyncErrorWrapper from "express-async-handler";
import Product from "../models/Product.js";

const addProduct = asyncErrorWrapper(async (req, res, next) => {
  const information = req.body;
});

export default addProduct;
