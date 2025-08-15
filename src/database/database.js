import { Sequelize } from 'sequelize';
import { envConfig } from '../config/env.config.js'

export const sequelize = new Sequelize(
    envConfig.database,
    envConfig.username,
    envConfig.password,
    {
        host: envConfig.host,
        dialect: envConfig.dialect,
        port: envConfig.port,
        logging: false
    }
);
