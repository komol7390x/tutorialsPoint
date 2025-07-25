import winston from "winston/lib/winston/config"
export const winstonFunc=()=>{
    winston.add(new winston.transports.File({filename:'logs/error-file-logs.log',level:'error'}))
    winston.add(new winston.transports.Console())
}