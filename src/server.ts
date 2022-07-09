require('dotenv').config();
import express from 'express';
import cors from 'cors';
import './database/config.ts';

import productRotes from './routers/productRotes';
import userRotes from './routers/usersRotes';

const app = express();
app.use(express.json());
app.use(cors());

app.use(productRotes);
app.use(userRotes);

app.listen(3000, () => console.log('Server ON'));