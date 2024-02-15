const express = require("express");
const commentRouter = express.Router();
const commentController = require("../controllers/comment.controller");

// commentRouter.get("/", commentController.getAllComments);
// commentRouter.get("/:commentId", commentController.getCommentById);
commentRouter.post("/", commentController.createcomment);
// commentRouter.put("/:commentId", commentController.updateComment);
commentRouter.delete("/:commentId", commentController.deletecomment);

module.exports = commentRouter;
