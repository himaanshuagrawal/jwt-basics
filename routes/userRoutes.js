import express from 'express';
import { dashboard,login } from '../controllers/userController.js';
import auth from '../middleware/auth.js';

const userRoutes = express.Router();

userRoutes.route('/login').post(login);
userRoutes.route('/dashboard').get(auth,dashboard);

export default userRoutes