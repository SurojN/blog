const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  desc: String,
  createdAt: { type: Date, default: Date.now },

  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("comment", commentSchema);
