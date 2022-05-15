import './Library.css'
import React, {useState,useEffect} from 'react';

function Library(){
    let [books,setBooks] = useState(false);
    useEffect (()=> {
        getBooks();
    }, []);
    function getBooks(){
        fetch('http://localhost:3001')
        .then(response => {
            return response.text();
        })
        .then(data => {
            setBooks(data)
        });
    }
      function createBook() {
        let bookname = prompt('Enter book name');
        let author = prompt('Enter book author');
        let nbPages = prompt('Enter book number of pages');
        let genre = prompt('Enter book genre');
        let edition = prompt('Enter book publisher');
        let annee_lu = prompt('Enter year of read');

        fetch('http://localhost:3001/book', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({bookname, author, nbPages, genre, edition, annee_lu}),
        })
          .then(response => {
            return response.text();
          })
          .then(data => {
            alert(data);
            getBooks();
          });
      }
    return(
        <div>
        { books ? books : 'Pas de livre dans la base de donnée '}
        <br/>
        <button onClick={createBook}>Créer un livre</button>
        
        </div>
    );
}

export default Library;