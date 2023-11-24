//  npm install express --save (Beginning)
//  npm i body-parser     _For post etc  

//  To add this as new rremote repo 
//  #region 
    

    //  git remote rm origin
    //  git init
    //  git add .
    //  git commit -m "Lab 6 Complete - Server and client talking"
    //  git branch -M main
    //  git remote rm  origin
    //  git remote add origin https://github.com/Hughem27/DRLab6.git
    //  git push -u origin main
    //#endregion

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


// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    //  If you want to name the db, do it after the /                            \/
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.qlluokg.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//  Adding a new schema to follow so the data is structured
const bookSchema = new mongoose.Schema({
    title:String,
    cover:String,
    author:String,
})

//  Creating a new object so it can be called to query / edit data
const bookModel = mongoose.model('book_collection', bookSchema);

//  using a .put to update the book
app.put('/api/book/:id', async(req,res)=>{
    console.log('Update: '+req.params.id);

    let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.send(book);

})


//  Post method to display data received
app.post('/api/book', (req,res)=> {
    console.log(req.body);

    //  Creating a new book
    bookModel.create({
        title:req.body.title,
        cover:req.body.cover,
        author:req.body.author,
    })
    //  Always send back to client otherwise it will try to keep the connection open and time out
    .then(()=> {
        res.send("Book not created");})
    .catch(()=>{res.send("Book not created");    })

    
});

// Res = response req = request
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

//  Using async instead of .then . catch
app.get('/api/books', async(req, res) => {
    
    //  Returning all books (await means it doesn't execute past that line till it has returned)
    let books = await bookModel.find({});
    res.json(books);


})

app.get('/api/book/:id',async(req,res)=>{
    console.log(req.params.id);

    let book = await bookModel.findById(req.params.id);
    res.send(book);
})


// Listener on port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})