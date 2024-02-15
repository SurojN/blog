const BlogCategory = require("../models/blogCategory.model");

// Create a new BlogCategory
exports.createBlogCategory = async (req, res) => {
  try {
    const { blogId, categoryId } = req.body;

    // Create a new BlogCategory
    const blogCategory = new BlogCategory({
      blogId,
      categoryId,
    });

    // Save the BlogCategory to the database
    await blogCategory.save();

    // Send a success response
    res.status(201).json({
      success: true,
      message: "BlogCategory created successfully",
      blogCategory,
    });
  } catch (error) {
    // Send an error response
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get a BlogCategory by ID
exports.getBlogCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the BlogCategory by ID
    const blogCategory = await BlogCategory.findById(id);

    if (!blogCategory) {
      throw new Error("BlogCategory not found");
    }

    // Send a success response
    res.status(200).json({
      success: true,
      message: "BlogCategory found successfully",
      blogCategory,
    });
  } catch (error) {
    // Send an error response
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all BlogCategories for a BlogPost
exports.getBlogCategoriesByBlogId = async (req, res) => {
  try {
    const { blogId } = req.params;

    // Find all BlogCategories for a BlogPost
    const blogCategories = await BlogCategory.find({ blogId });

    // Send a success response
    res.status(200).json({
      success: true,
      message: "BlogCategories found successfully",
      blogCategories,
    });
  } catch (error) {
    // Send an error response
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete a BlogCategory by ID
exports.deleteBlogCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the BlogCategory by ID and remove it
    await BlogCategory.findByIdAndRemove(id);

    // Send a success response
    res.status(200).json({
      success: true,
      message: "BlogCategory deleted successfully",
    });
  } catch (error) {
    // Send an error response
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
