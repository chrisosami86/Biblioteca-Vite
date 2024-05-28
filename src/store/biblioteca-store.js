import { book } from "../models/book-model";

const Filter = {
    All: 'all',
    Borrowed: 'borrowed',
    Free: 'free'
}

const store = {
    books: [
        new book ('Harry potter', 'Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y el insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el Colegio Hogwarts de Magia. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos, trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de quidditch, especie de fútbol aéreo que se juega montado sobre escobas, y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero, sobre todo, conocerá los secretos que le permitirán cumplir con su destino. Pues, aunque no lo parezca a primera vista, Harry no es un chico normal y corriente: ¡es un verdadero mago!','/public/assets/Harry.webp'),
        new book ('Aprende Unity y C#', 'Este libro está desarrollado para que las personas que quieran adentrase en el mundo de la programación de videojuegos puedan aprender, de forma didáctica y desde cero, como es la creación de un videojuego en una plataforma 3D y con todos los elementos de un juego profesional, de forma sencilla y completamente práctica. Se comienza con los conceptos básicos hasta alcanzar conceptos avanzados de un videojuego como son la programación de funcionalidad completa del personaje principal con sus animaciones y acciones, inteligencia artificial y ataques de diferentes tipos de enemigos como caminantes, de disparo (shooter), generadores de enemigos y plataformas móviles, generación de diferentes tipos de “Items” como invencibilidad y salud, sistema de vidas, efectos especiales, partículas, creación y navegación entre pantallas, Checkpoints y elementos de interface gráfica para el usuario (GUI).', '/public/assets/Unity.webp'),
        new book ('Don quijote de la mancha', 'El ingenioso hidalgo don Quijote de la Mancha narra las aventuras de Alonso Quijano, un hidalgo pobre que de tanto leer novelas de caballería acaba enloqueciendo y creyendo ser un caballero andante, nombrándose a sí mismo como don Quijote de la Mancha.','/public/assets/quijote.jpg'),
    ],
    filter: Filter.All
}

//Crea un libro nuevo
const addBook = ( name, description, url = '' ) => {
    if( !name || !description ) throw new Error ('Name and description is required');
    store.books.push( new book (name, description, url) );
}


//Borra un libro existente
const deleteBook = ( idBook ) => {
    if(!idBook) {
        throw new Error ('idBook is required');
    };

    store.books = store.books.filter( (book) => book.idBook !== idBook );
}


//Edita un libro existente
const editBook = ( idBook, name = '', description ='', urlImg = '') => {
    if (!idBook) throw new Error ('idBook is required');

    store.books = store.books.map( book => {
        if (book.idBook === idBook){
            book.name = name;
            book.description = description;
            book.urlImg = urlImg;
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

    store.books = store.books.map( book => {
        if (book.idBook === idBook){
            book.done = !book.done;
            return book;
        }else{
            return book;
        }
    });
}

const getBooks = ( ) => {
    return store.books;
}



export default {
    addBook,
    deleteBook,
    editBook,
    toggleBook,
    getBooks,
}