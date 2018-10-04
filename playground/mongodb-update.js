// find one and update
//Update Object needs to use update operators like {$inc:{key: incby}} or{$set:{field: value}}
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
    
    // findOneAndUpdateCol(db, 'Todos', {_id: new ObjectID('5bb68eb424e3f756446a098a')}, {$set: {completed: true}}, {returnOriginal: false});
    findOneAndUpdateCol(db, 'Users', {name:'Fenrir'}, {$set: {name: 'Thor'}}, {returnOriginal: false});
    findOneAndUpdateCol(db, 'Users', {name:'Thor'}, {$inc: {age: 1000}}, {returnOriginal: false});
    client.close();
});

findOneAndUpdateCol = (dbVar, collectionName, selector, update, options)=>{

    dbVar.collection(collectionName).findOneAndUpdate(selector, update, options).then((res)=>{

        console.log(res);

    });

}