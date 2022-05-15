const Pool = require ('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'online',
    port: 5432
});//replace with your information

/**
 * @brief Get all the books from the table of the same name
 * @returns results in json of all the books
 */
const getBooks = () => {
    return new Promise(function(resolve,reject){
        pool.query('SELECT * from books',(error,results) => {
            if(error)
                reject(error)
             resolve(results.rows);   
        })
    })
}

/**
 * @brief Get the book with specified ID
 * @returns results in json of the specified book
 */
const getBookById = () => {
    return new Promise(function(resolve,reject){
        const id = parseInt(request.params.id);
        pool.query('SELECT * FROM books WHERE id = $1', [id], (error, results) => {
            if(error)
                reject(error)
            resolve('Get book with id ${id}');
            resolve(results.row);
        })
    })
}

/**
 * @brief Get all the books with the same genre
 * @returns results in json of all the books with the same genre
 */
const getBookByGenre = () => {
    return new Promise(function(resolve,reject){
        const genre = request.params.genre;
        pool.query('SELECT * FROM books WHERE genre = $1', [genre], (error, results) => {
            if(error)
                reject(error)
            resolve('Genre : ${genre}');
            resolve(results.row);
        })
    })
}

/**
 * @brief Get all the books with the same author
 * @returns results in json of all the books with the same author
 */
 const getBookByAuthor = () => {
    return new Promise(function(resolve,reject){
        const author = request.params.author;
        pool.query('SELECT * FROM books WHERE author = $1', [author], (error, results) => {
            if(error)
                reject(error)
            resolve('Auteur du livre : ${author}');
            resolve(results.row);
        })
    })
}

/**
 * @brief Get all the books with the same publisher
 * @returns results in json of all the books with the same publisher
 */
 const getBookByEdition = () => {
    return new Promise(function(resolve,reject){
        const edition = request.params.edition;
        pool.query('SELECT * FROM books WHERE edition = $1', [edition], (error, results) => {
            if(error)
                reject(error)
            resolve('Maison d edition du livre : ${edition}');
            resolve(results.row);
        })
    })
}

/**
 * @brief Get all the books with the same read year 
 * @returns results in json of all the books with the same read year
 */
 const getBookByReadYear = () => {
    return new Promise(function(resolve,reject){
        const readYear = request.params.readYear;
        pool.query('SELECT * FROM books WHERE annee_lu = $1', [readYear], (error, results) => {
            if(error)
                reject(error)
            resolve('Année de lecture : ${readYear}');
            resolve(results.row);
        })
    })
}

/**
 * @brief Create a book and insert it in the table
 * @returns create the book in the table
 */
const createBook = (body) => {
    return new Promise(function(resolve, reject) {
        const { bookname, author, nbPages, genre, edition, annee_lu } = body
        pool.query('INSERT INTO books (bookname, author, nbPages, genre, edition, annee_lu) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [bookname, author, nbPages, genre, edition, annee_lu], (error, results) => {
        if (error) {
            reject(error)
        }
        resolve(`Nouveau livre ajouté: ${results.rows[0]}`)
        })
    })
}


/**
 * @brief Delete the specified book 
 * @returns delete the specified book
 */
const deleteBook = () => {
    return new Promise(function(resolve, reject) {
        const id = parseInt(request.params.id)
        pool.query('DELETE FROM books WHERE id = $1', [id], (error, results) => {
        if (error) {
            reject(error)
        }
        resolve(`Livre effacé avec l'id : ${id}`)
        })
    })
}

//exports functions
module.exports = {
    getBooks,
    getBookById,
    getBookByGenre,
    getBookByAuthor,
    getBookByEdition,
    getBookByReadYear,
    createBook,
    deleteBook
}