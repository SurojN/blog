const { ValidationError } = require("mongoose");
const {
  BadRequestError,
  NotFoundError,
  ForbiddenError,
} = require("../utils/error.utils");

const errorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(400).json({ message: err.message });
  }

  if (err instanceof BadRequestError) {
    return res.status(400).json({ message: err.message });
  }

  if (err instanceof NotFoundError) {
    return res.status(404).json({ message: err.message });
  }

  if (err instanceof ForbiddenError) {
    return res.status(403).json({ message: err.message });
  }

  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
};

module.exports = errorHandler;
