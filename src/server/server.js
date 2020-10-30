import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';

import api from './apps/api'

dotenv.config();
const { PORT, ENV } = process.env;

const app = express();

if(ENV == 'development') {
    console.log('Running on development')
} else {
    app.use(helmet())
}

app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Server listeneing on port ${PORT}`);
});
