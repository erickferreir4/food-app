const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');


router.get('/products', async (req, res) => {

    let {category, id, url} = req.query

    console.log(id, category, url)
    console.log(req.query)

    //if( id === undefined && category === undefined && url === undefined ) {
    //    res.sendStatus(403)
    //    return
    //}

    let query = {}
    if( id ) {
        query = {
            id: parseInt(id)
        }
    }
    else if (category) {
        query = {
            category: category
        }
    }
    else if (url) {
        query = {
            url: url
        }
    }


    let uri = process.env.APP_URI;

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try {

        client.connect((err, db) => {
            if (err) throw err;
            let dbo = db.db("food-app");
            dbo.collection("products").find(query).toArray(function(err, result) {
                if (err) throw err;
                res.json(result)
                db.close();
            });
        });

    } catch( e ) {
        res.sendStatus(500)
    } finally {
        //client.close(() => {
        //    console.log('conection closed in register')
        //});
    } 

})

router.get('/categories', async (req, res) => {

    let uri = process.env.APP_URI;

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try {

        client.connect((err, db) => {
            if (err) throw err;
            let dbo = db.db("food-app");
            dbo.collection("categories").find({}).toArray(function(err, result) {
                if (err) throw err;
                res.json(result)
                db.close();
            });
        });

    } catch( e ) {
        res.sendStatus(500)
    } finally {
    } 
})


router.post('/products', async (req, res) => {

    let uri = process.env.APP_URI;

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try {
        await client.connect();

        await client.db('food-app')
            .collection('products')
            .insertMany(req.body)

        res.sendStatus(200)

    } catch( e ) {
        res.sendStatus(500)
    } finally {
        client.close(() => {
            console.log('conection closed in register')
        });
    } 
})

router.post('/categories', async (req, res) => {

    let uri = process.env.APP_URI;

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    try {
        await client.connect();

        await client.db('food-app')
            .collection('categories')
            .insertMany(req.body)

        res.sendStatus(200)

    } catch( e ) {
        res.sendStatus(500)
    } finally {
        client.close(() => {
            console.log('conection closed in register')
        });
    } 
})






module.exports = router

//function teste() {
//MongoClient.connect(process.env.APP_URI, function(err, db) {
//    if (err) throw err;
//    var dbo = db.db("food-app");
//    var query = { category: 'special menu' };
//    dbo.collection("products").find(query).toArray(function(err, result) {
//        if (err) throw err;
//        console.log(result);
//        db.close();
//    });
//});
//}

