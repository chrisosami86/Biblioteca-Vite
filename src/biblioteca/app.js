import storeBooks from '../store/biblioteca-store'
import appHtml from '../biblioteca/app.html?raw';
import { renderBooks } from '../uses-cases/render-books';

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
}