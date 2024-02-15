const sendSuccessResponse = (res, message, data) => {
  res.status(200).json({
    success: true,
    message,
    data,
  });
};

const sendErrorResponse = (res, message, error) => {
  res.status(400).json({
    success: false,
    message,
    error,
  });
};

const sendUnauthorizedResponse = (res, message) => {
  res.status(401).json({
    success: false,
    message,
  });
};

const sendForbiddenResponse = (res, message) => {
  res.status(403).json({
    success: false,
    message,
  });
};

const sendNotFoundResponse = (res, message) => {
  res.status(404).json({
    success: false,
    message,
  });
};

module.exports = {
  sendSuccessResponse,
  sendErrorResponse,
  sendUnauthorizedResponse,
  sendForbiddenResponse,
  sendNotFoundResponse,
};
