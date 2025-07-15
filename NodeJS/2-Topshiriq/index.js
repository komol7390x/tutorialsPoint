import express from 'express'
import categoriesRoute from './routes/categories.js'
import { config } from 'dotenv'
config()

const app = express();
app.use(express.json());
app.use('/api/categories', categoriesRoute);
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`${port}chi portni eshitishni boshladim...`);
});
