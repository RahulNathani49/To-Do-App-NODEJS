var express = require('express');

var todocontroller = require('./Controllers/todocontroller.js');
var app = express();
// SET UP TEMPLATE ENGINE
app.set('view engine', 'ejs');

// STATIC FILES
app.use('/assets', express.static('assets'));

todocontroller(app);
// LISTEN TO PORT
app.listen('3000', '127.0.0.1');
console.log("LISTENING TO PORT 3000");