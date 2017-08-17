var express = require('express');
var router = express.Router();
/* GET users listing. */

// Public view page
router.post('/login', function(req, res) {
	console.log(req);
	res.send({"status":"ok","mid":"ABC001","token":"asjfdsalkfd"});
});


module.exports = router;