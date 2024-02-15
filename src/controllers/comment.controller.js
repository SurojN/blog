const comment = require("../models/comment.model");

exports.createcomment = async (req, res) => {
  const comment = new comment(req.body);
  try {
    const savedcomment = await comment.save();
    res.status(201).json(savedcomment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletecomment = async (req, res) => {
  try {
    await comment.findOneAndDelete({
      user_id: req.params.userId,
      post_id: req.params.postId,
    });
    res.status(204).json(null);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
