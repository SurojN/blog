const express = require("express");
const likeRouter = express.Router();
const likeController = require("../controllers/like.controller");

likeRouter.post("/", likeController.createLike);
likeRouter.delete("/:userId/:postId", likeController.deleteLike);

module.exports = likeRouter;
