var express = require('express');
var router = express.Router();
const postagemController = require('../controllers/postagemController')
const albumsController = require('../controllers/albumsController')
const todosController = require('../controllers/todosController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/postagem', postagemController.index)
router.get('/albums', albumsController.index)
router.get('/todos', todosController.index)

module.exports = router;
