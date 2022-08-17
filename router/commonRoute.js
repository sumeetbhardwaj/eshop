const express = require('express');
const Router = express.Router();
const commonController = require('../controllers/commonController')

Router.route("/").get(commonController.home);
Router.route("/eshopBlog").get(commonController.blog);
Router.route("/singleblog").get(commonController.singleBlog);
Router.route("/contact").get(commonController.contact);
Router.route("/*").get(commonController.error404);


module.exports = Router;