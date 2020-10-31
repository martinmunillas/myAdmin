import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import bcrypt from 'bcryptjs';

import userService from '../../components/auth/userService';

passport.use(
  new BasicStrategy(async (email, password, cb) => {
    const user = await userService.getUser(email);
    if (!user) {
      cb('Unauthorized');
    }
    if (!(await bcrypt.compare(password, user.password))) {
      cb('Unauthorized');
    }

    delete user.password;

    return cb(null, user);
  })
);
