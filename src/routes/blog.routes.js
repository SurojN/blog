const express = require("express");
const blogRouter = express.Router();
const blogController = require("../controllers/blog.controller");

blogRouter.get("/", blogController.getBlogPosts);
blogRouter.get("/:blogId", blogController.getBlogPostById);
blogRouter.post("/", blogController.createBlogPost);
blogRouter.put("/:blogId", blogController.updateBlogPost);
blogRouter.delete("/:blogId", blogController.deleteBlog);

module.exports = blogRouter;
