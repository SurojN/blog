const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/category.controller");

categoryRouter.get("/", categoryController.getAllCategories);
categoryRouter.get("/:categoryId", categoryController.getCategory);
categoryRouter.post("/", categoryController.createCategory);
categoryRouter.put("/:categoryId", categoryController.updateCategory);
categoryRouter.delete("/:categoryId", categoryController.deleteCategory);

module.exports = categoryRouter;
