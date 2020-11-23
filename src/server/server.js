import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

import api from './apps/api';
import ssr from './apps/ssr';

dotenv.config();
const { PORT, ENV } = process.env;

const app = express();

app.use(express.json());
app.use(cookieParser());

if (ENV == 'development') {
  console.log('Running on development');
} else {
  app.use(helmet({ contentSecurityPolicy: false }));
  app.disable('x-powered-by');
}

app.use('/api', api);
app.use(ssr);

app.listen(PORT, () => {
  console.log(`Server listeneing on port ${PORT}`);
});
