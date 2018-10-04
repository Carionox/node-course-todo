//Syntax MongoClient.connect(database URL, callback fx); connects to database
// Using Object destructuring Mongo CLient can be fetched using const {MongoClient} = require('mongodb');

const fs = require('fs');
const fileName = 'collection.json';

const MongoClient = require('mongodb').MongoClient;
// const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
const url = 'mongodb://localhost:27017';
const dbName = 'ToDoApp';


MongoClient.connect(`${url}/${dbName}`, {useNewUrlParser: true}, (err, client)=>{

    if(err){

        return console.log('unable to connect to Mongodb Server');

    }

    console.log('Connection established to MongoDB Server');
    const db = client.db(dbName);

    // insertDoc(db, 'Todos', {
        
    //     text:'Walk the dog',
    //     completed: false

    // });
    
    client.close();
});


insertDoc = (dbVar, collectionName, data) =>{

    dbVar.collection(collectionName).insertOne(data,(err, res)=>{

        if(err){

            return console.log('Unable to create collection', err);

        }

        console.log(JSON.stringify(res.ops,undefined,2));
        // console.log(JSON.stringify(res.ops[0]._id.getTimestamp(),undefined,2));
    });

};



