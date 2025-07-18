import express from 'express';
import fileRoutes from './routers/app.route.js';
import {configEnv} from './config/config.js'

const {PORT}=configEnv
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.use('/', fileRoutes);

app.listen(PORT, () => console.log(`Server ${PORT} portda ishga tushdi`));
