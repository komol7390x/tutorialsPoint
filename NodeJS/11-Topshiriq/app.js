import express from 'express';
import fileRoutes from './routes/fileRoutes.js';

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.use('/', fileRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server ${PORT} portda ishga tushdi`));
