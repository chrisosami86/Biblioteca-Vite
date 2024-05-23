import storeBooks from '../store/biblioteca-store'
import appHtml from '../biblioteca/app.html?raw';
import { renderBooks } from '../uses-cases/render-books';
import { book } from '../models/book-model';

const elementIDs = {
  allBooks: '#listBook',
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
  const urlLibro = document.querySelector('#fileId');
  const idArchivo = document.querySelector('#fileId');



  //Eventos
  btnCrear.addEventListener('click', () => {
    if(!nombreLibro.value.trim()) throw new Error('The name is required');
    if(!descripcionLibro.value.trim()) throw new Error('The Description is required');

    let imgUrl = urlLibro.value
    imgUrl = imgUrl.trim().replace(`C:\fakepath`, 'C:/Users/TECNICO-RECUR-TECNOL/Documents/Autodidacta/JavaScript con Fernando/Biblioteca-Vite/public/assets');
    storeBooks.addBook(nombreLibro.value, descripcionLibro.value,imgUrl);
    console.log(imgUrl);
    displayBooks(); 
  });

}