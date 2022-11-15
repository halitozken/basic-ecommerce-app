import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  id: {
    type: String,
  },

  categoryName: {
    type: String,
  },

  seoUrl: {
    type: String,
  },
});

const CategoryModel = mongoose.model("Category", CategorySchema);
export default CategoryModel;
