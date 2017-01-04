var Article = require('../../models/article');

function save(req, res) {
    var body = req.body;
    var article = new Article({
        title: body.title,
        content: body.content,
        author: body.author,
        image: req.file.filename
    });
    article.save(function(err) {
        if (err) {
            console.error(err);
        }
        res.redirect('/');
    });
}

module.exports = save;