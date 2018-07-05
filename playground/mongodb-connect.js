// const MongoClient = require("mongodb").MongoClient;

const {MongoClient, ObjectID} = require("mongodb");

// URL //

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log("Connected to MongoDB server");
  //
  // client.collection("Todos").find({
  //   _id: new ObjectID("5b324de15d9c155350ad80a8")
  // }).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  //
  // }, (err) => {
  //   console.log("Unable to fetch todos", err);
  // });

  client.collection("Users").find({
    name: "Kevin Kwok"
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, err => {
    if(err) throw new Error("Unable to count Kevins");
  });


    // client.collection("Todos").find().count().then((count) => {
    //   console.log(`Todos count: ${count}`);
    //   console.log(JSON.stringify(docs, undefined, 2));
    //
    // }, (err) => {
    //   console.log("Unable to fetch todos", err);
    // });

  // client.close();
});
