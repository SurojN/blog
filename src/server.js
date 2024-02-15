const express = require("express");
const app = express();
const port = process.env.PORT || 8082;

console.log(process.env.PORT, "this is port");

// routes here

const authRoutes = require("./routes/auth.routes");

const blogRoutes = require("./routes/blog.routes");

const userRoutes = require("./routes/user.routes");

const categoryRoutes = require("./routes/category.routes");

const blogCategoryRoutes = require("./routes/blogCategory.routes");

const commentRoutes = require("./routes/comment.routes");

const likeRoutes = require("./routes/like.routes");

// Using route files

app.use("api/auth", authRoutes);

app.use("/api/blogs", blogRoutes);

app.use("/api/users", userRoutes);

app.use("/api/categories", categoryRoutes);

app.use("api/blogCategories", blogCategoryRoutes);

app.use("api/comments", commentRoutes);

app.use("api/likes", likeRoutes);

//  error handler middleware
const errorHandler = require("./middlewares/error.middleware");

// Use error handler middleware as the last middleware function in the middleware stack
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
