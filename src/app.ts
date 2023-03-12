import express from 'express';
export const app = express();

import { router } from './routes/routes';

app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to the Drinks API!'));

app.get('/coffeelover', (req, res) => res.send('I like coffee!'));

app.use('/', router);