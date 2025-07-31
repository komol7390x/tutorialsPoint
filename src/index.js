import express from 'express';

import router from './routers/index.route.js'
import { connectDB } from './database/database.js';
import { configFile } from './config/env.config.js';
import production from './start/production.js'
import {globalErrorHandle} from './error/global-error-handle.js'
const app = express();

(async()=>{
await connectDB()
})()
production(app)

app.use(express.json());
app.use('/api', router)
app.use(globalErrorHandle)

const PORT = +configFile.PORT || 5000;

app.listen(PORT, () => console.log('Server is runing PORT: ', PORT));


export default app