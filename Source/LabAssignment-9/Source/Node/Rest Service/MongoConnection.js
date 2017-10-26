
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://pranu:pranu123@ds235785.mlab.com:35785/aselab9';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});



