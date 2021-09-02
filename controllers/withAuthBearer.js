const { HttpErros } = require("../utils/ErrorHandler");
const jwt = require("jsonwebtoken");

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const withAuthBearer = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.sendError(HttpErros.UNAUTHORIZED);

  try {
    jwt.verify(token.replace("Bearer ", ""), process.env.JWT_KEY);
    next();
  } catch (e) {
    res.sendError(HttpErros.UNAUTHORIZED);
  }
};

module.exports = withAuthBearer;
