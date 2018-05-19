var exports = module.exports = {}
 
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}
 
exports.signin = function(req, res) {
 
    res.render('index');
 
}
 
 
exports.dashboard = function(req, res) {
 
    res.render('dashboard');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}

exports.booksread = function(req, res) {
    res.render('booksRead');
}

exports.readinglist = function(req, res) {
    res.render('readingList');
}