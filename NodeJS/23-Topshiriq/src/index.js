import express from 'express';

import router from './routers/index.route.js'
import { connectDB } from './database/database.js';
import {configFile} from './config/env.config.js';

await connectDB()
const app = express();

app.use(express.json());
app.use('/api',router)


const PORT = +configFile.PORT|| 5000;

app.listen(PORT, () => console.log('Server is runing PORT: ',PORT));


export default app