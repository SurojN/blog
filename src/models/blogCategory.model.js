const mongoose = require("mongoose");

const blogCategorySchema = new mongoose.Schema({
  blog: { type: mongoose.Schema.Types.ObjectId, ref: "BlogPost" },

  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

module.exports = mongoose.model("blogCategory", blogCategorySchema);
