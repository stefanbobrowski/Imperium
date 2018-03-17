const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Imperium");

var userSchema = new mongoose.Schema({
    username: String,
    password: String
});
var User = mongoose.model('User', userSchema);
var novelSchema = new mongoose.Schema({ any: {} });
var Novel = mongoose.model('Novel', novelSchema, 'novels');
var primarchSchema = new mongoose.Schema({ any: {} });
var Primarch = mongoose.model('Primarch', primarchSchema, 'primarchs');

// const connection = (closure) => {
//     return MongoClient.connect('mongodb://localhost:27017/Imperium', (err, db) => {
//         if (err) return console.log(err);
//         var db = db.db('Imperium');
//         closure(db);
//     });
// };


// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ?  err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get novels
router.get('/novels', (req, res) => {
    Novel.find()
    .then((novels) => {
        res.json(novels);
    })
    .catch((err) => {
        sendError(err, res);
    });
});

// Get novel by url_title
router.get('/novels/:url_title', (req, res) => {
    let urlTitle = req.params.url_title;
    Novel.findOne({url_title: urlTitle})
    .then((novel) => {
        res.json(novel);
    })
    .catch((err) => {
        sendError(err, res);
    });
});

//Get primarchs
router.get('/primarchs', (req, res) => {
    Primarch.find()
    .then((primarchs) => {
        res.json(primarchs);
    })
    .catch((err) => {
        sendError(err, res);
    });
});

// Get Primarch by url_name
router.get('/primarchs/:url_name', (req, res) => {
    let urlName = req.params.url_name;
    Primarch.findOne({url_name: urlName})
    .then((primarch) => {
        res.json(primarch);
    })
    .catch((err) => {
        sendError(err, res);
    });
});

// Register new user
router.post('/register', (req, res) => {
    console.log(req.body);
    let usr = new User(req.body);
    usr.save()
        .then(user => {
            console.log("api here" + user);
            res.json(user);
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});


// Login user
router.post('/login', (req, res) => {
    console.log(req.body);
    let usr = new User(req.body);
    User.findOne( {username: usr.username, password: usr.password}, function(err, user) {
        if(!user) {
            console.log("cannot find user: " + usr.username);
            res.json('Cannot find user: ' + usr.username);
        } else if(user) {
            console.log("user found" + user);
              res.json(user); 
        }
    })
});


router.get('/logout', function(req, res) {  
    req.logout();
    res.redirect('/');
  });


//Get Users
router.get('/users', (req, res) => {
    User.find()
    .then((users) => {
        res.json(users);
    })
    .catch((err) => {
        sendError(err, res);
    });
});



module.exports = router;