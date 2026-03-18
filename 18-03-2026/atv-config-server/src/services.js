import express from 'express';
import route from   './routes/studentRoutes.js';

const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Cherry!');
});

app.use ('/students', route);
  
app.listen(PORT, () => {
    console.log(' O server está conectado em: http://localhost:3000:${PORT}')
});

