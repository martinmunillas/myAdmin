import express from 'express';
import passport from 'passport';

import scopesValidationHandler from '../../utils/middlewares/scopesValidationHandler';
import response from '../../network/response';
import service from './service';

const router = express.Router();

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['read:projects']),
  async (req, res) => {
    try {
      const messages = await service.getMessages();
      response.success(req, res, 200, 'Messages retrieved correctly', messages);
    } catch (error) {
      response.error(req, res, 500, error.message, error);
    }
  }
);

router.post('/', async (req, res) => {
  try {
    const message = await service.sendMessage(req.body);
    response.success(req, res, 200, 'Message sent succesfully', message);
  } catch (error) {
    response.error(req, res, 500, error.message, error);
  }
});

router.put(
  '/:id/read',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['projects']),
  async (req, res) => {
    try {
      const projects = await service.readMessage(req.params.id);
      response.success(req, res, 200, 'Message read', projects);
    } catch (error) {
      response.error(req, res, 500, error.message, error);
    }
  }
);

router.put(
  '/:id/unread',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['projects']),
  async (req, res) => {
    try {
      const projects = await service.unreadMessage(req.params.id);
      response.success(req, res, 200, 'Message read', projects);
    } catch (error) {
      response.error(req, res, 500, error.message, error);
    }
  }
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['projects']),
  async (req, res) => {
    try {
      const projects = await service.deleteMessage(req.params.id);
      response.success(req, res, 200, 'Message deleted correctly', projects);
    } catch (error) {
      response.error(req, res, 500, error.message, error);
    }
  }
);

export default router;
