var Article = require('../../models/article');

function getAll(req, res, nex) {
    Article.find({}, function(err, articles) {
        if (err) {
            next(err);
        }
        console.log(articles);
        res.render('index', { articles: articles, authorized: req.isAuthenticated() });
    });
}

module.exports = getAll;