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

const addBook = ( name, description ) => {
    store.books.push( new book (name, description) );
}

const deleteBook = ( idBook ) => {
    store.books = store.books.filter( book => {book.idBook !== idBook });
}

const editBook = ( idBook ) => {
    throw new Error ('Not Implemented');
}

const toggleBook = ( idBook ) => {
    throw new Error ('Not Implemented');
}

const showBooks = ( ) => {
    throw new Error ('Not Implemented');
}

export default {
    addBook,
    deleteBook,
    editBook,
    toggleBook,
    showBooks
}