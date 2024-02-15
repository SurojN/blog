const express = require("express");
const blogCategoryRouter = express.Router();
const blogCategoryController = require("../controllers/blogCategory.controller");

// blogCategoryRouter.get("/", blogCategoryController.getAllBlogCategories);
// blogCategoryRouter.get(
//   "/:blogCategoryId",
//   blogCategoryController.getBlogCategoryById
// );
// blogCategoryRouter.post("/", blogCategoryController.createBlogCategory);
// blogCategoryRouter.put(
//   "/:blogCategoryId",
//   blogCategoryController.updateBlogCategory
// );
blogCategoryRouter.delete(
  "/:blogCategoryId",
  blogCategoryController.deleteBlogCategoryById
);

module.exports = blogCategoryRouter;
