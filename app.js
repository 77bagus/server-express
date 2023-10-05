import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/index.js'; // Mengimpor rute utama

dotenv.config(); // Mengimpor konfigurasi dari .env
const port = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Menggunakan rute utama
app.use('/api', routes);

// Server
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
