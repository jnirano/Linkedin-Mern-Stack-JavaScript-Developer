
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:127017/learning_mongo';

//This function get all the document & print them to console
var findDocuments = function (db, callback) {
	var collection = db.collection('tours');

	// collection
   // .find().toArray(function (err, docs) {
   //    console.log(docs);
   //    callback;
   // });

	collection
   .find({ tourPackage: 'Snowboard Cali' })
   .toArray(function (err, docs) {
      console.log(docs);
      callback;
   });
};

//
MongoClient.connect(url, function(err, db){
   console.log('Connected successfully to server.');

   //this closes the db when it is done with finding the documents
   findDocuments(db, function(){
      db.close();
   })
})

