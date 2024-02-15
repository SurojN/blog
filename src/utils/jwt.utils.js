const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );
};

const verifyAccessToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access token not found" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      if (err.name === "JsonWebTokenError") {
        return res.status(403).json({ message: "Invalid access token" });
      }
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Access token has expired" });
      }
    }
    req.user = user;
    next();
  });
};

const verifyRefreshToken = (req, res, next) => {
  const token = req.body.refreshToken;

  if (!token) {
    return res.status(401).json({ message: "Refresh token not found" });
  }

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      if (err.name === "JsonWebTokenError") {
        return res.status(403).json({ message: "Invalid refresh token" });
      }
    }
    req.user = user;
    next();
  });
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
