import winston from "winston"
export const winstonFunc=()=>{
    winston.add(new winston.transports.File({filename:'logs/error-file-logs.log',level:'error'}))
    winston.add(new winston.transports.Console())
}