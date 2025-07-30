import winston from "winston";
import 'winston-mongodb';
import { configFile } from '../config/env.config.js';

const customTime = winston.format((info) => {
    const data = new Date();
    info.timestamp = data.toLocaleString('en-GB', { timeZone: 'Asia/Tashkent', hour12: false })
    return info
})

const infoOnlyFilter = winston.format((info) => {
    return info.level === 'info' ? info : false;
});

const logger = winston.createLogger({
    transports: [
        // file log
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({
            filename: 'logs/info.log',
            level: 'info',
            format: winston.format.combine(infoOnlyFilter())
        }),
        new winston.transports.File({ filename: 'logs/combined.log' }),

        //mongodb log error
        new winston.transports.MongoDB({
            db: configFile.mongo_url,
            collection: 'errorLogs',
            level: 'error'
        }),

        //mongodb log info
        new winston.transports.MongoDB({
            db: configFile.mongo_url,
            collection: 'infoLogs',
            level: 'info'
        })
    ],
    //yozish formatini berish
    format: winston.format.combine(
        customTime(),
        winston.format.prettyPrint()
    )
})

export default logger