import express from 'express';
import passport from 'passport';

import response from '../../network/response';
import service from './service';
import scopesValidationHandler from '../../utils/middlewares/scopesValidationHandler';

const router = express.Router();

require('../../utils/auth/jwt');

router.get('/', async (req, res) => {
  try {
    const projects = await service.getInfo();
    response.success(req, res, 200, 'Info retrieved correctly', projects);
  } catch (error) {
    response.error(req, res, 500, error.message, error);
  }
});

router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const projects = await service.postInfo(req.body);
    response.success(req, res, 200, 'Info created correctly', projects);
  } catch (error) {
    response.error(req, res, 500, error.message || error, error);
  }
});

router.put('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const projects = await service.setInfo(req.body);
    response.success(req, res, 200, 'Info updated correctly', projects);
  } catch (error) {
    response.error(req, res, 500, error.message, error);
  }
});

export default router;
