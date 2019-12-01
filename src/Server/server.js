const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//link for database
const mongoDB = 'mongodb+srv://admin:admin@cluster0-dmuq6.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true }); //connects to database with this parser

//below code allows cross talk with CORS
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//node server.js in terminal to run code
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//creates folder to parse info into database
const Schema = mongoose.Schema;

const tvShowSchema = new Schema({
    title: String,
    year: String,
    poster: String
})

const TvShowModel = mongoose.model('tvShows', tvShowSchema) //creates a folder called tvShows and links the tvShowSchema to it


//code for server side deleting
app.delete('/api/tvshows/:id', (req, res) => {
    console.log(req.params.id); //shows id for item delted

    TvShowModel.deleteOne({ _id: req.params.id }, (error, data) => { //matches selected id to be deleted
        if (error)
            res.json(error);
        res.json(data);

    })
})

//passes id and matches id, return on json when found
app.get('/api/tvShows/:id', (req, res) => {

    console.log(req.params.id);

    TvShowModel.findById(req.params.id, (error, data) => {
        res.json(data);

    })
})

//server sided editing
app.put('/api/tvShows/:id', (req, res) => {
    console.log("edit: " + req.params.id);
    TvShowModel.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (error, data) => {
            res.json(data);
        })
})


//reading from MongoDB
app.get('/api/tvShows', (req, res) => {

    TvShowModel.find((error, data) => {

        res.json({ tvshows: data }) //calls the data to have an array called tvshows in Json
    })



})

//used for server sided create
app.post('/api/tvshows', (req, res) => {
    console.log('Tv Show Recieved');
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

    //allows data creted and passed up to mongoDB
    TvShowModel.create({
        title: req.body.title,
        year: req.body.year,
        poster: req.body.poster,
    });
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))