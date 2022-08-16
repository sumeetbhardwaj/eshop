const express = require('express');
const Router = express.Router();
const userController = require('../controllers/userController')

Router.route("/").get(userController.register)


module.exports = Router;