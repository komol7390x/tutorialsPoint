import winston from "winston";

export const winstonError=(err, _, res, _) => {
  winston.error(err.message,err)
  return res.status(500).json({
     message: err.message || "Server error" 
    });
}