const { BlogPost } = require("../models/blog.model");

const { Like } = require("../models/like.model");

exports.createBlogPost = async (req, res) => {
  try {
    const { title, body, user_id, status, state } = req.body;
    const blogPost = new BlogPost({ title, body, user_id, status, state });
    await blogPost.save();
    res
      .status(201)
      .json({ message: "Blog post created successfully", blogPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().populate({
      path: "user_id",
      select: "userName",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBlogPostById = async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id).populate("user_id");

    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBlogPost = async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

    if (!deletedBlog)
      return res.status(404).json({ message: "Blog not found" });

    res.status(200).json(deletedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// for like post on the blog

exports.likeBlogPost = async (req, res) => {
  try {
    const like = new Like({
      user_id: req.user._id,
      blogPost_id: req.params.blogPostId,
    });

    await like.save();

    await BlogPost.findByIdAndUpdate(req.params.blogPostId, {
      $inc: { likeCount: 1 },
    });

    res.status(201).json({ message: "Blog post liked" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.unlikeBlogPost = async (req, res) => {
  try {
    await Like.findOneAndDelete({
      user_id: req.user._id,
      blogPost_id: req.params.blogPostId,
    });

    await BlogPost.findByIdAndUpdate(req.params.blogPostId, {
      $inc: { likeCount: -1 },
    });

    res.status(201).json({ message: "Blog post unliked" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
