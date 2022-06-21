const BookController = require('../controllers/bookController')

const express = require('express'),
routes = express.Router()

routes.post("/book", BookController.create)

module.exports = routes
