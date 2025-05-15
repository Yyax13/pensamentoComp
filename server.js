import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path'; 
import session from 'express-session';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 3001;

import r from './routes/filmes.js';
app.use(r);

// Adicionando rota para servir o front-end no caminho '/'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT || 3001, () => {
    console.log(`Server is running on port ${PORT}`);
});