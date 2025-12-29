import express from 'express';
import { getMessage } from './message.js';

const app = express();

// Endpoint API
app.get('/api/message', (req, res) => {
  res.json({ message: getMessage() });
});

// Ruta simple
app.get('/', (req, res) => {
  res.send('Backend funcionando correctamente');
});

export default app;
