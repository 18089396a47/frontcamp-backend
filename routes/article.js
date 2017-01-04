var express = require('express');
var router = express.Router();
var path = require('path');
var save = require('../controllers/articles/save');
var update = require('../controllers/articles/update');
var deleteOne = require('../controllers/articles/deleteOne');
var getOne = require('../controllers/articles/getOne');
var getAll = require('../controllers/articles/getAll');
var loggedIn = require('../helpers/loggedIn');
var multer = require('multer');

var upload = multer({ dest: 'public/uploads/' });

router.get('/add', loggedIn, getOne);
router.get('/edit/:id', loggedIn, getOne);
router.get('/delete/:id', loggedIn, deleteOne);

router.post('/add', upload.single('image'), loggedIn, save);
router.post('/edit/:id', upload.single('image'), loggedIn, update);

module.exports = router;
