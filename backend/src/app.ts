import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { cardRouter } from './app/modules/cards/cards.routes';
const app: Application = express();
// const port = 3000;

//parsers
app.use(express.json());
app.use(cors());

app.use('/', cardRouter);
app.get('/', (req: Request, res: Response) => {
  res.send('Hellow Word');
});

export default app;
