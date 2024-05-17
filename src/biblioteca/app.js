import storeBooks from '../store/biblioteca-store'
import appHtml from '../biblioteca/app.html?raw';


export const App = (elementId) => {
    (()=>{
      const app = document.createElement('div');
          app.innerHTML = appHtml; //mandando la importacion de html en crudo
          document.querySelector(elementId).append(app);
          storeBooks.showBooks();          
    })()
  }