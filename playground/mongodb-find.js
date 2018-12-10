//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  };
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  //
  // db.collection('Todos').find({
  //   _id: new ObjectID('5bfa9f3ac97abe11b848faed')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }).catch((err)=>{
  //   console.log('Unable to fetch Todos', err);
  // });


    // db.collection('Todos').find().count().then((count)=>{
    //   console.log(`Todos count: ${count}`);
    // }).catch((err)=>{
    //   console.log('Unable to fetch Todos', err);
    // });



    db.collection('Users').find({
      name: 'Andrew Mead'
    }).toArray().then((docs)=>{
      console.log('Users');
      console.log(JSON.stringify(docs, undefined, 2));
    }).catch((err)=>{
      console.log('Unable to fetch Users', err);
    });



  client.close();
});
