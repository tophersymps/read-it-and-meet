var authController = require('../controllers/authcontroller.js');
 
 
module.exports = function(app, passport) {
 
    app.get('/signup', authController.signup);
 
    app.get('/', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/'
        }
 
    ));

    app.get('/dashboard',isLoggedIn, authController.dashboard);
 
    app.get('/booksread', isLoggedIn, authController.booksread);

    app.get('/readinglist', isLoggedIn, authController.readinglist);

    app.get('/logout',authController.logout);

    function isLoggedIn(req, res, next) {
 
        if (req.isAuthenticated())
         
            return next();
             
        res.redirect('/dashboard');
     
    };

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
 
        failureRedirect: '/'
    }
 
));
 
}