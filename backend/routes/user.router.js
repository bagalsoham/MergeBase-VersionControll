const express = require('express');
const userController = require('../controllers/userController');

const mainRouter = express.Router();


mainRouter.get('/allUsers', userController.getAllUsers);
mainRouter.post('/signup', userController.signup);
mainRouter.post('/login', userController.login);
mainRouter.get('/updateProfile', userController.getUserProfile);
mainRouter.put('/updateProfile', userController.updateUserProfile);
mainRouter.delete('/deleteProfile', userController.deleteUserProfile);

module.exports = mainRouter;
