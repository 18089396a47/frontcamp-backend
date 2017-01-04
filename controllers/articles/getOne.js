var Article = require('../../models/article');
var checkId = require('../../helpers/checkId');

function getOne(req, res, next) {
    console.log(req.params.id);
    if (checkId(req.params.id)) {
        Article.findById(req.params.id, function(err, article) {
            if (err) {
                next(err);
            }
            console.log(article);
            if (article) {
                res.render('article', {
                    article: article,
                    type: 'edit'
                });
            } else {
                res.render('article', { type: 'add' });
            }
        });
    } else {
        console.log('add');
        res.render('article', { type: 'add' });
    }
}

module.exports = getOne;