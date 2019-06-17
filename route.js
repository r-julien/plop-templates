import express from 'express';
import passport from 'passport';

import passportConfig from '../config/passport';
import { accessLevels } from '../config/userRoles';
import { allowOnly } from '../utils/routeUtils';

passportConfig(passport);
const router = express.Router();

const add{{pascalCase name}} = (req, res) => {
  
};

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  allowOnly(accessLevels.user, add{{pascalCase name}}),
);

export default router;
