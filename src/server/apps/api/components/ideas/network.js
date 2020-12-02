import express from 'express';
import passport from 'passport';

import response from '../../network/response';
import service from './service';
import scopesValidationHandler from '../../utils/middlewares/scopesValidationHandler';

const router = express.Router();

require('../../utils/auth/jwt');

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  scopesValidationHandler(['ideas']),
  async (req, res) => {
    try {
      const ideas = await service.getIdeas();
      response.success(req, res, 200, 'Ideas retrieved correctly', ideas);
    } catch (error) {
      response.error(req, res, 500, error.message, error);
    }
  }
);

router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const idea = await service.keepIdea(req.body);
    response.success(req, res, 200, 'Idea kept succesfully', idea);
  } catch (error) {
    response.error(req, res, 500, error.message, error);
  }
});

router.put('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const idea = await service.upgradeIdea(req.body, req.params.id);
    response.success(req, res, 200, 'Idea updated succesfully', idea);
  } catch (error) {
    response.error(req, res, 500, error.message, error);
  }
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const idea = await service.deleteIdea(req.params.id);
    response.success(req, res, 200, 'Idea deleted correctly', idea);
  } catch (error) {
    response.error(req, res, 500, error.message, error);
  }
});

export default router;
