const express = require('express');
const Router = express.Router();
const commonController = require('../controllers/commonController')

Router.route("/").get(commonController.home);


module.exports = Router;