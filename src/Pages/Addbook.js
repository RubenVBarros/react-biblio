import './Addbook.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
//import { useState } from 'react';

/*function myForm(){
    const [inputs,setInputs] = useState({});

    const handleChange = (event) => {
        const bookName = event.target.bookName;
        const bookAuthor = event.target.bookAuthor;
        const bookNbPages = event.target.bookNbPages;
        const bookEdition = event.target.bookEdition;
        setInputs(values => ({...values,[name]:value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
    }
}*/

function Addbook(){
    return(
        <div>
            <form>
                <div className='main'>
                    <div className='container'>
                    <label>Nom du bouquin</label>
                        <TextField id="outlined-basic" name="bookName" variant="outlined"/>
                        <label>Nom de l'auteur</label>
                        <TextField id="outlined-basic" name="bookAuthor" variant="outlined"/>

                        <label>Nombre de pages</label>
                        <TextField id="outlined-basic" name="bookNbPages" variant="outlined"/>

                        <label>Maison d'édition</label>
                        <TextField id="outlined-basic" name="bookEdition" variant="outlined"/>

                        <Button id="btn" variant='text'>Valider</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Addbook;