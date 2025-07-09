import express from 'express';
import {config} from 'dotenv'

import routers from './routers/mongodb.route.js'
config()

const server=express();
server.use(express.json());
server.use('/data',routers);

const PORT=process.env.PORT
server.listen(PORT,()=>console.log(`server is running PORT: ${PORT}`))
