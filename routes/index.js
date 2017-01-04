var express = require('express');
var getAll = require('../controllers/articles/getAll');
var router = express.Router();

/* GET home page. */
router.get('/', getAll);

module.exports = router;
