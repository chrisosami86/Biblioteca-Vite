import storeBooks from '../store/biblioteca-store'
import appHtml from '../biblioteca/app.html?raw';
import { renderBooks } from '../uses-cases/render-books';

const elementIDs = {
  allBooks: '#listBook',
  imgBook: '#imgBook',
  defaultBook: '../assets/noBook.jpg',
  dataIdModificar: '',
  imgDisponible: '../assets/disponible.png',
  imgNoDisponible: '../assets/nodisponible.png',
  imgNoSeleccionado: '../assets/noseleccionado.png'
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
  const btnModificar = document.querySelector('#btnModify');
  const ventanaModal = document.querySelector('#modal');
  const nombreModificado = document.querySelector('#nameBook3');
  const descriModificada = document.querySelector('#descriptionBook3');
  const urlImgModificada = document.querySelector('#fileId3');
  const ImgModificada = document.querySelector('#imgBook3');
  const btnModificarCambios = document.querySelector('#btnModifyBook3');
  const btnBorrar = document.querySelector('#btnDelete');
  const imgDisponibilidad = document.querySelector('#disponiblidad');
  const btnPrestar = document.querySelector('#btnLend');




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
    elementIDs.dataIdModificar = idBookHtml;
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
        if(book.done === false){
          imgDisponibilidad.src = elementIDs.imgDisponible;
          btnPrestar.value = 'Pedir Prestado';
        }else{
          imgDisponibilidad.src = elementIDs.imgNoDisponible;
          btnPrestar.value = 'Devolver Libro';
        }

      }
    });
  });

  urlImgModificada.addEventListener('change', (event) => {
    if(event.target.files[0]){
      const reader = new FileReader();
      reader.onload = function (e){
        ImgModificada.src = e.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
      
    }else{         
      ImgModificada.src = elementIDs.defaultBook;
    }

  });

  btnModificar.addEventListener('click', () => {
    if(elementIDs.dataIdModificar.trim() === '') throw new Error('idBook is required');
    ventanaModal.show();
    ventanaModal.style.display = 'flex';
    document.querySelector('#fondoModal').style.display = 'block';
    let libros = storeBooks.getBooks();

    libros.forEach((book) =>{
      if(elementIDs.dataIdModificar === book.idBook){
        nombreModificado.value = book.name;
        descriModificada.value = book.description;
        ImgModificada.src = book.urlImg;
      }
    });

  });


  btnModificarCambios.addEventListener('click', () => {
    if(ImgModificada.src.trim() === ''){
      storeBooks.editBook(elementIDs.dataIdModificar, nombreModificado.value, descriModificada.value, elementIDs.defaultBook);
      urlImgModificada.value = '';
      elementIDs.dataIdModificar = '';
      displayBooks();
    }else{
      storeBooks.editBook(elementIDs.dataIdModificar, nombreModificado.value, descriModificada.value, ImgModificada.src);
      urlImgModificada.value = '';
      elementIDs.dataIdModificar = '';
      displayBooks();
    }
    document.querySelector('#fondoModal').style.display = 'none';
    ventanaModal.style.display = 'none';
    ventanaModal.close();
  });

  btnBorrar.addEventListener('click', () => {
    storeBooks.deleteBook(elementIDs.dataIdModificar);
    alert('Libro Borrado con exito');
    imgDisponibilidad.src = elementIDs.imgNoSeleccionado;
    elementIDs.dataIdModificar = '';
    displayBooks();

  });

  btnPrestar.addEventListener('click', () => {
    storeBooks.toggleBook(elementIDs.dataIdModificar);
    alert('Accion Exitosa');
    elementIDs.dataIdModificar = '';
    displayBooks();
  });

}