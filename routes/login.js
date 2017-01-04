var express = require('express');
var path = require('path');
var passport = require('passport');
var router = express.Router();

router.get('/', function(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/');
        return;
    }
    res.render(path.resolve('views/login.jade'));
});

router.post('/', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}), function(req, res){res.redirect('/')});

module.exports = router;
