//deleteOne deleteMany findOneAndDelete 
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
    // deleteInCollection(db,'Todos', {text:'X'});
    // deleteManyInCollection(db,'Todos', {text:'Take out the trash'});
    // findOneAndDel(db,'Todos', {text:'love'});
    
    // deleteManyInCollection(db,'Users', {name:'Andy'});
    findOneAndDel(db,'Users', {_id: new ObjectID('5bb3aaf12fb6de14a01ec744')});
    client.close();
});

deleteInCollection = (dbVar, collectionName,selector)=>{

    dbVar.collection(collectionName).deleteOne(selector).then((res)=>{

        console.log('Record Deleted');

    }, (err)=>{

        console.log('An error occured:', err);

    });

}

deleteManyInCollection = (dbVar, collectionName,selector)=>{

    dbVar.collection(collectionName).deleteMany(selector).then((res)=>{

        console.log('Records Deleted');

    }, (err)=>{

        console.log('An error occured:', err);

    });

}

findOneAndDel = (dbVar, collectionName,selector)=>{

    dbVar.collection(collectionName).findOneAndDelete(selector).then((res)=>{

        console.log('Record Deleted', res.value);

    }, (err)=>{

        console.log('An error occured:', err);

    });

}