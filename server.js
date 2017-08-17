var express = require('express');
var app = express();
var router = express.Router();
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'));
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use("/auth",require('./auth-api/auth-routes.js'));

app.use("/spiderapi",require('./sspider/spider-routes.js'));

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
// REGISTER OUR ROUTES -------------------------------


// all of our routes will be prefixed with /api
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
