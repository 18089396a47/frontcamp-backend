var Article = require('../../models/article');
var checkId = require('../../helpers/checkId');

function deleteOne(req, res, nex) {
    if (checkId(req.params.id)) {
        Article.findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                next(err);
            }
            res.redirect('/');
        });
    } else {
        res.redirect('/');
    }
}

module.exports = deleteOne;