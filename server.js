const express = require('express');
const session = require('express-session');
const hash = require('pbkdf2-password')()
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(session({
    secret: 'shhhh, very secret',
    resave: false,
    saveUninitialized: false
}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// Is this some CORS sheet?
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

// API file for interacting with MongoDB
// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

// Start Server
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));