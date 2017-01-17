var Article = require('../../models/article');

function getAll(req, res, nex) {
    Article.find({}, function(err, articles) {
        if (err) {
            next(err);
        }
        console.log(articles);
        res.json(articles);
    });
}

module.exports = getAll;