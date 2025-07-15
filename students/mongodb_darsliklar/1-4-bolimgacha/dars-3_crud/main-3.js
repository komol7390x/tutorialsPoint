import express from 'express'
import { config } from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

import { autentenfikatsiya } from './autenfikatsiya.js'
import { logger } from './logger.js'
import bookRouter from './routes/books.js'

config()
const server = express();

server.use(express.json());
server.use(express.urlencoded());
server.use(express.static('public'))

server.use('/app/books',bookRouter)

server.use(helmet())
server.use(morgan('combined'))

// server.use(autentenfikatsiya)
// server.use(logger)


const PORT = +process.env.PORT
server.listen(PORT, () => console.log(`Server is running:`, PORT))
