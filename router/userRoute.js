const express = require('express');
const Router = express.Router();
const userController = require('../controllers/userController')

Router.route("/register").get(userController.register)
Router.route("/login").get(userController.login)


module.exports = Router;