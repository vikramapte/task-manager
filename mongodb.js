// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');  // Use destructuring to get MongoClient and ObjectID instead of conventional code on Line # 3,4 an 5

const connectionURL = `mongodb://127.0.0.1:27017`;
const database = `task-manager`;

// const id = new ObjectID();
// console.log (`id : ${id.id.length} :: StringRep : ${id.toHexString().length} and timestamp is ${id.getTimestamp()}`);

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return Console.log(`Unable to connect to Databse`);
    }

    const db = client.db(database);

    // db.collection('users').findOne({ _id: new ObjectID("5dc1541f89362a858dcf7e00")}, (error, user) => {
    //     if (error) {
    //         return console.log(`Unable to fetch`);
    //     }

    //     if (user) {
    //         console.log(user);
    //     } else {
    //         console.log(`User not found`);
    //     }
        
    // })

    // db.collection('users').find({ age: 33 }).toArray((error, users) => {
    //     console.log(users);
    // })

    // db.collection('users').find({ age: 33 }).count((error, count) => {
    //     console.log(count);
    // })

    const tasksCollection = db.collection('tasks');
    tasksCollection.findOne({"_id" : new ObjectID("5dc14f29282b682d9139442f")} , (error, task) => {
        if (error) {
            return console.log(`Unable to fetch`);
        }

        if (task) {
            return console.log(task);
        } else {
            return console.log(`Task not found`)
        }

    });

    tasksCollection.find({ completed: false}).toArray((error, result) => {
        if (error) {
            return console.log(`Unable to fetch`);
        }

        return console.log(result);
    });


    // db.collection('users').insertOne({
    //     _id: id,
    //     name: `Arjun`,
    //     age: 33
    // }, (error, result) => {
    //     if (error) {
    //         return Console.log('Unable to insert User.');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Bhakti',
    //         age: 27
    //     },
    //     {
    //         name: 'Vikram',
    //         age: 32
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return Console.log('Unable to insert documents');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: `Task 1 description`,
    //         completed: true
    //     },
    //     {
    //         description: `Task 2 description`,
    //         completed: false
    //     }, 
    //     {
    //         description: `Task 2 description`,
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log(`Unable to insert tasks documents.`);
    //     }

    //     console.log(result.ops);
    // })



});