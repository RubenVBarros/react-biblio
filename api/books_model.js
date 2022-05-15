const Pool = require ('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'online',
    port: 5432
});//replace with your information

const getBooks = () => {
    return new Promise(function(resolve,reject){
        pool.query('SELECT * from books',(error,results) => {
            if(error)
                reject(error)
             resolve(results.rows);   
        })
    })
}

//exports functions
module.exports = {
    getBooks
}