const Like = require("../models/like.model");

exports.createLike = async (req, res) => {
  const like = new Like(req.body);
  try {
    const savedLike = await like.save();
    res.status(201).json(savedLike);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteLike = async (req, res) => {
  try {
    await Like.findOneAndDelete({
      user_id: req.params.userId,
      post_id: req.params.postId,
    });
    res.status(204).json(null);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
