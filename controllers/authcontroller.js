var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}

exports.NYT = function(req, res) {
 
    res.render('NYT');
 
}

exports.author = function(req, res) {
 
    res.render('author-manager');
 
}
exports.newpost = function(req, res) {
 
    res.render('new-post');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/signin');
 
    });
 
}