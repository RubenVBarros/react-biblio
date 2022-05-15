import './Library.css'
import React, {useState,useEffect} from 'react';

function Library(){
    const [books,setBooks] = useState(false);
    useEffect (()=> {
        getBook();
    }, []);
    function getBook(){
        fetch('http://localhost:3001')
        .then(response => {
            return response.text();
        })
        .then(data => {
            setBooks(data)
        });
    }
    return(
        <div>
        { books ? books : 'Pas de livre dans la base de donnée '}
        </div>
    );
}

export default Library;