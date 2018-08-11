// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require("express-handlebars");

// Init App
const app = express();
const PORT = process.env.PORT || 8080

// Set static content to public directory
app.use(express.static('public'));

/* 
Body Parser Middleware 
*/

// Parse application urlencoded 
app.use(bodyParser.urlencoded({extended: true}));
// Parse application json
app.use(bodyParser.json());

// Init hanlebars as view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Import routes from controller folder so server has access to them
const routes = require('./controllers/burgers_controller.js');
app.use(routes);

// Init server and begin listening
app.listen(PORT, function(){
    console.log(`Server now listening on port: ${PORT}`);
});