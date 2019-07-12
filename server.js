const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const { mongoDbUrl } = require('./config/database');
const passport = require('passport');

mongoose.Promise = global.Promise;

mongoose.connect(mongoDbUrl, { useNewUrlParser: true }).then(db => {
    console.log('MONGO conected');
}).catch(error => console.log("COULD NOT CONNECT" + error));

const { select } = require('./helpers/handlebars-helpers');

// Load routes 
const index = require('./routes/index');

// set engine
app.engine('handlebars', exphbs({ defaultLayout: 'home', helpers: { select: select } }));
app.set('view engine', 'handlebars');

// bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Passport 
app.use(passport.initialize());
app.use(passport.session());

//Angular dist output folder
app.use(express.static(path.join(__dirname, 'dist/myexpertskill')));
app.use(express.static(path.join(__dirname, 'src/app')));
//Load routes
const register = require('./routes/index');

//Use Routes 
app.use('/index', index);
app.use('/register', path.join(__dirname, 'src/app/pages/register') );

// send all other request to angular app
app.set('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/myexpertskill/index.html'));
});

// Set Port
const port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`listening on port 3000`);
});