import winston from "winston";

export const winstonError = (err, req, res, next) => {
  winston.error(err.message, err);
  return res.status(500).json({
    message: err.message || "Server error"
  });
};