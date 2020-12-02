import express from 'express';
import passport from 'passport'

import response from '../../network/response';
import service from './service';
import scopesValidationHandler from '../../utils/middlewares/scopesValidationHandler'

const router = express.Router();

require('../../utils/auth/jwt')

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['toDos']),
  async (req, res) => {
    try {
      const toDos = await service.getToDos();
      response.success(req, res, 200, 'ToDos retrieved correctly', toDos);
    } catch (error) {
      response.error(req, res, 500, error.message, error);
    }
  }
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['toDos']),
  async (req, res) => {
    try {
      const toDo = await service.saveToDo(req.body);
      response.success(req, res, 200, 'ToDo sent succesfully', toDo);
    } catch (error) {
      response.error(req, res, 500, error.message, error);
    }
  }
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['toDos']),
  async (req, res) => {
    try {
      const toDo = await service.deleteToDo(req.params.id);
      response.success(req, res, 200, 'ToDo deleted correctly', toDo);
    } catch (error) {
      response.error(req, res, 500, error.message, error);
    }
  }
);

export default router;
