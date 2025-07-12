import express from 'express'
import { config } from 'dotenv';
import Joi from 'joi';
import helmet from 'helmet';

import { autentenfikatsiya } from './autenfikatsiya.js'
import { logger } from './logger.js'
import morgan from 'morgan';

config()
const server = express();

const books = [
    { id: 1, name: "Alisher" },
    { id: 2, name: "Baxtiyor" },
    { id: 3, name: "Javohir" },
    { id: 4, name: "Hamdam" },
]

server.use(express.json());
server.use(express.urlencoded());
server.use(express.static('public'))

server.use(helmet())
server.use(morgan('combined'))

// server.use(autentenfikatsiya)
// server.use(logger)

server.get('/api/books', (_, res) => {
    try {
        return res.status(200).json({
            message: 'success',
            data: books
        })
    } catch (error) {
        return res.status(500).json({
            message: `error get server ${error.message}`,
            data: {}
        })
    }
})

server.post('/api/books', (req, res) => {
    try {
        const result = checkValidate(req.body)
        if (result.error) {
            return res.status(400).json({
                message: `bad request ${JSON.stringify(result.error.details[0].message)}`,
            })
        }
        const book = {
            id: books.length ? books.at(-1).id + 1 : 1,
            name: req.body.name
        }
        books.push(book);
        return res.status(201).json({
            message: 'success',
            data: books
        })
    } catch (error) {
        return res.status(500).json({
            message: `error post server ${error.message}`,
            data: {}
        })
    }
})

server.get('/api/books/:id', (req, res) => {
    try {
        const id = req.params.id
        const result = books.find(item => item.id == id)
        if (!result) {
            return res.status(404).json({
                message: 'not found user',
                data: {}
            })
        }
        return res.status(200).json({
            message: 'success',
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: `error get server ${error.message}`,
            data: {}
        })
    }
})

server.put('/api/books/:id', (req, res) => {
    try {
        const id = req.params.id
        const index = books.findIndex(item => item.id == id)
        if (index == -1) {
            return res.status(404).json({
                message: 'not found user',
                data: {}
            })
        }
        books[index] = { id, name: req.body.name }
        return res.status(200).json({
            message: 'success',
            data: books[index]
        })
    } catch (error) {
        return res.status(500).json({
            message: `error get server ${error.message}`,
            data: {}
        })
    }
})

server.delete('/api/books/:id', (req, res) => {
    try {
        const id = req.params.id
        const index = books.findIndex(item => item.id == id)
        if (!index) {
            return res.status(404).json({
                message: 'not found user',
                data: {}
            })
        }
        books.splice(index, 1)
        return res.status(200).json({
            message: 'success',
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
            message: `error get server ${error.message}`,
            data: {}
        })
    }
})
const checkValidate = (item) => {
    const bookSchema = Joi.object({
        name: Joi.string().required().min(3).unique()
    })
    const result = bookSchema.validate(item)
    return result
}
const PORT = +process.env.PORT
server.listen(PORT, () => console.log(`Server is running:`, PORT))
