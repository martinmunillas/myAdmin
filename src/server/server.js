import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';

import api from './apps/api'
import ssr from './apps/ssr'

dotenv.config();
const { PORT, ENV } = process.env;

const app = express();

app.use(express.json())

if(ENV == 'development') {
    console.log('Running on development')
} else {
    app.use(helmet())
}

app.use('/api', api);
app.use('/', ssr);

app.listen(PORT, () => {
  console.log(`Server listeneing on port ${PORT}`);
});
