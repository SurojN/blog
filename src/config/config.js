module.exports = {
  jwtSecret: process.env.JWT_SECRET || "your-secret-key",
  saltRounds: process.env.SALT_ROUNDS || 10,
  apiPrefix: process.env.API_PREFIX || "/api",
};
