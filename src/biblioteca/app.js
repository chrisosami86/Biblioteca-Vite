import storeBooks from '../store/biblioteca-store'
import appHtml from '../biblioteca/app.html?raw';
import { renderBooks } from '../uses-cases/render-books';
import { book } from '../models/book-model';

const elementIDs = {
  allBooks: '#listBook',
  imgBook: '#imgBook',
  defaultBook: '/public/assets/no book.jpg',
}




export const App = (elementId) => {

  const displayBooks = () => {
    const books = storeBooks.getBooks();
    renderBooks(elementIDs.allBooks , books);
  }

  

  (()=>{
      const app = document.createElement('div');
          app.innerHTML = appHtml; //mandando la importacion de html en crudo
          document.querySelector(elementId).append(app);
          displayBooks();        
  })();

  //Referencias
  const btnCrear = document.querySelector('#btnCreateBook');
  const nombreLibro = document.querySelector('#nameBook');
  const descripcionLibro = document.querySelector('#descriptionBook');
  const idArchivo = document.querySelector('#fileId');
  const bookImg = document.querySelector('#imgBook');
  const listadoLibros = document.querySelector('#listBook');
  const pNombreLibro = document.querySelector('#nameBook2');
  const pDescripcionLibro = document.querySelector('#descriptionBook2')
  const pImgBook = document.querySelector('#imgBook2');


  //reset
  const resetLabel = () => {
    nombreLibro.value = '';
    descripcionLibro.value = '';
    idArchivo.value = '';
    bookImg.src = elementIDs.defaultBook;
  }

  //Eventos
  btnCrear.addEventListener('click', () => {
    if(!nombreLibro.value.trim()) throw new Error('The name is required');
    if(!descripcionLibro.value.trim()) throw new Error('The Description is required');
    let urlBook = bookImg.src;   
    storeBooks.addBook(nombreLibro.value, descripcionLibro.value,urlBook);
    alert('Libro creado con exito');
    resetLabel();
    displayBooks(); 
  });


  idArchivo.addEventListener('change', (event) => {
    if(event.target.files[0]){
      const reader = new FileReader();
      reader.onload = function (e){
        bookImg.src = e.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      
    }else{         
      bookImg.src = elementIDs.defaultBook;
    }

  });

  listadoLibros.addEventListener('click', (event) => {
    let element = event.target.closest('[data-id]');
    let idBookHtml = element.getAttribute('data-id');
    let elementos = document.getElementsByClassName('nombreLabel');
    let libros = storeBooks.getBooks();
    
    for(let i=0; i< elementos.length; i++){
      elementos[i].style.background = '';
    }

    
    libros.forEach((book) =>{
      if(idBookHtml === book.idBook){
        element.style.background = 'lightblue';
        pNombreLibro.innerHTML = book.name;
        pDescripcionLibro.innerHTML = book.description;
        pImgBook.src = book.urlImg;
      }
    });
  });

}