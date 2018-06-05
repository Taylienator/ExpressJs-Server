// import files and packages up here
var morgan = require('morgan');
var express = require('express');
var app = express();
var data = require('./data.json');
// create your express server below



app.listen(8080, function(){
    console.log('listening at port 127.0.0.1:8080. . .');
})

// add your routes and middleware below
app.use(morgan('dev'));

app.use(express.static('/Users/taylienator/oca/startnow-web101-san-diego-top-spots'));

app.get('/data', function(request, respond){
    respond.status(200).json(data);
    console.log('Sending Data. . .');
});


// finally export the express application
module.exports = app;
