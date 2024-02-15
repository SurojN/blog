const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/user.controller");

userRouter.get("/", userController.getAllUsers);
userRouter.get("/:userId", userController.getUser);
userRouter.post("/", userController.createUser);
userRouter.put("/:userId", userController.updateUser);
userRouter.delete("/:userId", userController.deleteUser);

module.exports = userRouter;
