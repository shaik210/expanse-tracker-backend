import express from 'express';
import Connection from './database/db.js';

import Routes from './routes/router.js';
import cors from 'cors';
// import { addExpense } from './yourController.js'



  const app = express();

  app.use(cors());

  app.use('/', Routes);

  // app.post('/add-expense', addExpense);

  const port = 4000;

  Connection();

  app.listen(port, () => {

    console.log(`Server is running on ${port}`);
  });