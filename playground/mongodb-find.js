//Syntax MongoClient.connect(database URL, callback fx); connects to database
// Using Object destructuring Mongo CLient can be fetched using const {MongoClient} = require('mongodb');
//find returns a cursor
//cursor are like poiunters, use toArray() to get the data as a promise
const fs = require('fs');
const fileName = 'collection.json';

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
const url = 'mongodb://localhost:27017';
const dbName = 'ToDoApp';


MongoClient.connect(`${url}/${dbName}`, {useNewUrlParser: true}, (err, client)=>{

    if(err){

        return console.log('unable to connect to Mongodb Server');

    }

    console.log('Connection established to MongoDB Server');
    const db = client.db(dbName);
    
    // db.collection('Todos').find({_id: new ObjectID('5bb5bc431e67711808605663')}).toArray().then((res)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(res, undefined,2));
    // }, (err)=>{

    //     console.log(err);

    // })
    // db.collection('Todos').find().count().then((res)=>{
    //     console.log(`Todos Count: ${res}`);
    // }, (err)=>{

    //     console.log(err);

    // })

    findinCollection(db, 'Users', {name: 'Andy'});
    client.close();
});

findinCollection = (dbVar, collectionName, query) => {

    dbVar.collection(collectionName).find(query).toArray().then((res)=>{

        console.log(JSON.stringify(res, undefined, 2));

    }, (err)=>{

        console.log(err);

    });

}