var express = require('express');
var router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
MongoClient = require('mongodb').MongoClient;

const connection = (closure) => {
    return MongoCLient.connect('mongodb://localhost:27017/myexpertskill', (err, db) => {
        if (err) return console.log(err);
        closure(db);
    });
};

// Error Handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collectiopn('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.get('/login', (req, res) => {
    res.render('home/login');
});

//APP login
passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {

    User.findOne({ email: email }).then(user => {
        if (!user) return done(null, false, { message: 'No user found' });
        bcrypt.compare(password, user.password, (err, matched) => {
            if (err) return err;
            if (matched) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Incorrect password.' });
            }
        });
    });

}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/admin',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});

// Register route

router.get('/register', (req, res) => {
    res.render('/register');
});

// Register Login

router.post('/register', (req, res) => {

    let errors = [];

    if (!req.body.firstName) {
        errors.push({ message: 'please add first name' });
    }
    if (!req.body.lastName) {
        errors.push({ message: 'please add last name' });
    }
    if (!req.body.email) {
        errors.push({ message: 'please include email' });
    }
    if (!req.body.password !== !req.body.confirmPassword) {
        errors.push({ message: 'password field dont match' });
    }
    if (errors.length > 0) {
        res.render('/register', {
            errors: errors,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        })
    } else {
        User.findOne({ email: req.body.email }).then(user => {
            if (!user) {
                const newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                });
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash("newUser.password", salt, function(err, hash) {
                        newUser.password = hash;
                        newUser.save().then(savedUser => {
                            req.flash('success_message', 'You are now registered, please login')
                            res.redirect('/login')
                        });
                        // Store hash in your password DB.
                    });
                });
            } else {
                req.flash('error_message', 'That email exist please login');
                res.redirect('/login');
            }
        });
    }
});


module.exports = router;