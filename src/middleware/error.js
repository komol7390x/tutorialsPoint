import logger from "../utils/Winston.js";

export const winstonError = (err, _req, res, _next) => {
  logger.error(err.message);
  return res.status(500).json({
    message: err.message || "Server error"
  });
};