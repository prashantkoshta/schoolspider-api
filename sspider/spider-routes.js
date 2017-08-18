var express = require('express');
var router = express.Router();
var Books = require("../models/books");
/* GET users listing. */
var testData = {
    "title" : "Exam",
    "classes" : [ 
        {
            "class" : "1",
            "title" : "1st",
            "subjects" : [ 
                {
                    "title" : "English",
                    "topices" : [ 
                        {
                            "title" : "Topic 1",
                            "qestions" : [ 
                                {
                                    "question" : "wsdd d d d de. d",
                                    "answer" : "1",
                                    "type" : "input"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

router.get('/testapi', function(req, res) {
	res.send(200,testData);
});

router.get('/testapidb', function(req, res) {
    var promise = Books.find({}).exec();
    promise.then(function (books) {
      return res.status(200).send(books);
    }).then(null, function (err) {
      assert.ok(err instanceof Error);
      return res.status(400).send("Invalid paramter.");
    });
});

router.post('/getData', function(req, res) {
    var param  = req.body;
    console.log("req",JSON.stringify(param.query));
    try{
        var promise = Books.find(param.query,param.fields).sort(param.sort).limit(param.count).exec();
        promise.then(function (books) {
            return res.status(200).send(books);
        }).then(null, function (err) {
            return res.status(400).send("Invalid paramter.");
        });
    }catch(err){
        return res.status(400).send("Invalid paramter.",err);
    }
});

module.exports = router;