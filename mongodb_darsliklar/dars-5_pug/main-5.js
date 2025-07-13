import express from 'express'

const app = express()

app.use(express.json())
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', { title: 'my express app', greeting: 'SALOM' })
})

app.listen(5000, () => console.log('Server is runing ', 5000))