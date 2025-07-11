import userRouters from './routers/server.route.js'
import {config} from 'dotenv';
import express from 'express';
config()

const server=express();
server.use(express.json());

server.use('/users',userRouters);

const PORT=process.env.PORT
server.listen(PORT,()=>console.log('Server is running:',PORT))