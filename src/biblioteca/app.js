

export const App = (elementId) => {
    (()=>{
      const app = document.createElement('div');
          app.innerHTML = `<h1>Hola Mundo</h1>`; //mandando la importacion de html en crudo
          document.querySelector(elementId).append(app);
    })()
  }