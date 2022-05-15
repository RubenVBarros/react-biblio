const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

//import models
const books_model = require('./books_model')

app.use(express.json())
app.use(cors())
app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Access-Control-Allow-Headers');
    next();
});

//defining routes for api functions

//get all the books
app.get('/', (req, res) => {
  books_model.getBooks()
  .then(response =>{
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

//get the book with specified id
app.get('/book/:id', (req, res) => {
  books_model.getBookById(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

//get the book with specified author
app.get('/book/:author', (req, res) => {
  books_model.getBookByAuthor(req.params.author)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

//get the book with specified publisher
app.get('/book/:edition', (req, res) => {
  books_model.getBookByEdition(req.params.edition)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

//get the book with specified genre
app.get('/book/:genre', (req, res) => {
  books_model.getBookByGenre(req.params.genre)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

//get the book with specified readYear
app.get('/book/:readYear', (req, res) => {
  books_model.getBookByReadYear(req.params.readYear)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

//create the book
app.post('/book', (req, res) => {
  books_model.createBook(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

//delete the book with specified id
app.delete('/book/:id', (req, res) => {
  books_model.deleteBook(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})