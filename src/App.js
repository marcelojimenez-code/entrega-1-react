import './App.css';
import NavBar from './Components/NavBar';

import ItemListContainer from './Components/ItemListContainer';

import "bulma/css/bulma.css";


function App() {  

  const parametros = [
    {
        titulo: 'Bienvenidos a la tienda virtual en React',
        alumno: 'Marcelo Jimenez C'
    }
  ]

  return (
    <div className="App">
      <NavBar />            
      <ItemListContainer parametros={parametros} />      
    </div>
  );
}

export default App;
