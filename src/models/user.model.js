// const userSchema = new mongoose.Schema({
//   role: { type: String, enum: ["admin", "editor", "author"] },

//   userName: String,

//   password: String,

//   createdAt: { type: Date, default: Date.now },

//   updatedAt: { type: Date, default: Date.now },
// });

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: { type: String, enum: ["superAdmin", "admin", "writer", "viewer"] },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
