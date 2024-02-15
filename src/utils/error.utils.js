class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const BadRequestError = new AppError("Bad Request", 400);
const NotFoundError = new AppError("Not Found", 404);
const ForbiddenError = new AppError("Forbidden", 403);

module.exports = {
  AppError,
  BadRequestError,
  NotFoundError,
  ForbiddenError,
};
