const express = require("express");
const request = require("request");
const querystring = require("querystring");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectID;
const https = require("https");
var bodyParser = require('body-parser')

var port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* CRITICAL -- Allow cross domain requests */
function allowCrossDomain(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
}

//MongoDB URI
const uri = "mongodb+srv://sam:wiDKBZSMc7ncQCg6@cluster0.yzdxb.mongodb.net/project?retryWrites=true&w=majority";

const COLLECTION_NAME = "project"

/* CRITICAL -- Allow cross domain requests */
app.use(allowCrossDomain);

app.listen(port, function () {
    console.log("Server is now listening for requests on port " + port + " !");
});

// returns all the documents in the "project" table
app.get("/getData/", function (req, res) {
    console.log("GET request: get data")
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    client.connect(err => {
        if (err) throw err;

        const collection = client.db(COLLECTION_NAME).collection(COLLECTION_NAME);

        collection.find({}).toArray(function (err, result) {
            if (err) throw err;
            res.send(result)
        });
    });

    client.close()
});

// delete one document by ID
app.post("/deleteData/", function (req, res) {
    console.log("DELETE request: delete data")
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    client.connect(err => {
        if (err) throw err;

        const collection = client.db(COLLECTION_NAME).collection(COLLECTION_NAME);

        collection.deleteOne({ '_id': new ObjectId(req.body._id)}, function (err, result) {
            if (err) throw err;
            res.send(result)
            console.log("Document deleted")
        });
    });

    client.close()
});

// delete many documents from list of IDs
app.post("/deleteMany/", function (req, res) {
    console.log("DELETE MANY request")
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    client.connect(err => {
        if (err) throw err;

        const collection = client.db(COLLECTION_NAME).collection(COLLECTION_NAME);

        let list = req.body
        console.log(list)
        for (let i in list) {
            collection.deleteOne({ '_id': new ObjectId(list[i])}, function (err, result) {
                if (err) throw err;
                console.log("Document deleted")
            });
        }
       res.send("200")
    });

    client.close()
});

// creates a new document in mongoDB
app.post("/addData", function (req, res) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("addData req.body: ", req.body)
    client.connect(err => {
        if (err) throw err;

        const collection = client.db(COLLECTION_NAME).collection(COLLECTION_NAME);

        collection.insertOne(req.body, function (err, result) {
            if (err) throw err;
            res.send(result)
            console.log("POST request: insertedId: ", result.insertedId)
        });
    });

    client.close()
})

// updates an existing document in mongoDB
app.post("/updateData/", function (req, res) {
    console.log("UPDATE request req.body: ", req.body)
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    client.connect(err => {
        if (err) throw err;

        const collection = client.db(COLLECTION_NAME).collection(COLLECTION_NAME);
        let newValues = {
            $set:
                {
                    Class: req.body.Class,
                    Notes: req.body.Notes,
                    Title: req.body.Title,
                    Link: req.body.Link,
                    Categories: req.body.Categories
                }
        }
        
        collection.updateOne({ '_id': new ObjectId(req.body._id) }, newValues, function (err, result) {
            if (err) throw err;
            res.send(result)
            console.log("Document updated")
        });
    });

    client.close()
});

