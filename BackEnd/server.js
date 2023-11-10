//  npm install express --save (Beginning)
//  npm i body-parser     _For post etc  

//  Implementing Express
const express = require('express')
const app = express()
const port = 4000   //   4000 because client = 30000

//  Added Cors to handle cors errors on server (prevent DDoSing etc)
//npm i cors
const cors = require('cors');

//  Implementing Cors
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//  body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/api/book', (req,res)=> {
    console.log(req.body);
    res.send("Data Received");
});

// Res = response req = request
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

//  Changed our API ocation to our server on localhost:4000
app.get('/api/books', (req, res) => {

    const books = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg", "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []

        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
        }
    ];



    res.json({
        myBooks: books,
        "Message": "Some info",
        "Status": "Happy"

    })



})


// Listener on port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})