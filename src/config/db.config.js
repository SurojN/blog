// const mongoose = require("mongoose");
// require("dotenv").config();

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// module.exports = {
//   url: process.env.MONGODB_URI || "mongodb://localhost:27017/blog-app",
//   options: {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//   },
// };

// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// });

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

const mongoose = require("mongoose");

const dbConfig = {
  url: process.env.MONGODB_URI || "mongodb://localhost:27017/blog-db",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
};

mongoose
  .connect(dbConfig.url, dbConfig.options)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Failed to connect to database:", err));

module.exports = mongoose;
