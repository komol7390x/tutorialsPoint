import express from 'express';
import { sequelize } from './database/database.js';
import { envConfig } from './config/env.config.js'
import userRoutes from './router/user.route.js';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

(async () => {
    try {
        await sequelize.authenticate();
        console.log(`✅ Connected to ${envConfig.dialect} database: ${envConfig.database}`);
        await sequelize.sync({ alter: true });

        app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));
    } catch (error) {
        console.error('❌ Database connection failed:', error.message);
    }
})();