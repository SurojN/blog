// const blogPostSchema = new mongoose.Schema({
//   title: String,

//   body: String,

//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

//   status: { type: String, enum: ["draft", "published"] },

//   state: { type: String, enum: ["public", "private"] },

//   createdAt: { type: Date, default: Date.now },

//   updatedAt: { type: Date, default: Date.now },
// });

const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["draft", "published"], default: "draft" },
  likeCount: { type: Number, default: 0 },
  state: { type: String, enum: ["public", "private"], default: "public" },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("BlogPost", blogSchema);
