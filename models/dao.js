var MongoClient = require('mongodb').MongoClient;
var url = process.env.DB_URL;

function Dao(){
    this.url = process.env.DB_URL;
}
Dao.prototype.getConnection = function getConnection(){
    return new Promise(function (resolve, reject) {
        MongoClient.connect(url, function(err, db) {
            if (err) {
                throw err;
                return reject(err)
            }
            return resolve(db); 
        }); 
    });
    
};


Dao.prototype.executeQuery = function executeQuery(collectionName,query,queryType) {
    var ref = this;
    return new Promise(
        function (resolve, reject) {
            return ref.getConnection().then(
                function (db) {
                    if(queryType =="find"){
                        db.collection(collectionName).find(query).toArray(function(err, result) {
                            if (err) reject(err);
                            db.close();
                            return resolve(result); 
                        });
                    }else if(queryType=="findone"){
                        db.collection(collectionName).findOne(query, function(err, result) {
                            if (err) reject(err);
                            db.close();
                            return resolve(result); 
                        });
                    }else if(queryType=="distinct"){
                        db.collection(collectionName).distinct(query).toArray(function(err, result) {
                            if (err) reject(err);
                            db.close();
                            return resolve(result); 
                        });
                    }else if(queryType=="aggregate"){
                        db.collection(collectionName).aggregate(query).toArray(function(err, result) {
                            if (err) reject(err);
                            db.close();
                            return resolve(result); 
                        });
                    }else{
                        reject("No type of query paramter match.");
                    }
                })
                .catch(function (err) {
                    return reject(err);
                });
        }
    );
};





Dao.prototype.executeMethod = function executeMethod(fName,params) {
    
    var ref = this;
    return new Promise(
        function (resolve, reject) {
            return ref.getConnection().then(
                function (db) {
                    db.eval('getClassAndTerm()',function(err, result) {
                            if (err) {
                                console.log(err);
                                reject(err);
                            }
                            db.close();
                            return resolve(result); 
                        });
                })
                .catch(function (err) {
                    return reject(err);
                });
        }
    );
};



module.exports = Dao;
