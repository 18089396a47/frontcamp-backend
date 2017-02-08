var Article = require('../../models/article');
var checkId = require('../../helpers/checkId');

function update(req, res) {
    if (checkId(req.params.id)) {
        var body = req.body;
        var article = new Article({
            title: body.title,
            content: body.content,
            author: body.author
        });
        Article.findByIdAndUpdate(req.params.id, { $set: {
            title: body.title,
            content: body.content,
            author: body.author,
            date: new Date()
        }}, function(err) {
            if (err) {
                console.error(err);
            }
            res.send(200);
        });
    } else {
        req.send(500);
    }
}

module.exports = update;