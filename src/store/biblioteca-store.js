import { book } from "../models/book-model";

const Filter = {
    All: 'all',
    Borrowed: 'borrowed',
    Free: 'free'
}

const store = {
    books: [
        new book ('Harry potter', 'Libro de magia y hechiceros'),
        new book ('Aprende Unity y C#', 'Desarrollo de videojuegos y programación'),
        new book ('Don quijote de la mancha', 'Novela que relata la vida del quijote'),
    ],
    filter: Filter.All
}

//Crea un libro nuevo
const addBook = ( name, description ) => {
    if( !name || !description ) throw new Error ('Name and description is required');
    store.books.push( new book (name, description) );
}


//Borra un libro existente
const deleteBook = ( idBook ) => {
    if(!idBook) {
        throw new Error ('idBook is required');
    };

    store.books = store.books.filter( book => {book.idBook !== idBook });
}


//Edita un libro existente
const editBook = ( idBook, name = '', description ='' ) => {
    if (!idBook) throw new Error ('idBook is required');

    store.books = store.books.forEach( book => {
        if (book.idBook === idBook){
            book.name = name;
            book.description = description;
            return book;
        }else{
            return book;
        }
    })
}

//Prestar un libro
//Verdadero para Libre
//Falso para prestado
const toggleBook = ( idBook ) => {
    if ( !idBook ) throw new Error('idBook is required');

    store.books = store.books.forEach( book => {
        if (book.idBook === idBook){
            book.done = !book.done;
            return book;
        }else{
            return book;
        }
    });
}

const showBooks = ( ) => {
    console.log( store.books );
}

export default {
    addBook,
    deleteBook,
    editBook,
    toggleBook,
    showBooks
}