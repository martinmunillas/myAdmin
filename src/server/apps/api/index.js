import express from 'express';
const router = express.Router();

import connect from './db';

connect();

import components from './network/components';

router.use(components);

export default router;
