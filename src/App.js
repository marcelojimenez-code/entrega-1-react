import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

import "bulma/css/bulma.css";


function App() {  

  return (
    <div className="App">
      <NavBar />      
      <ItemListContainer />
    </div>
  );
}

export default App;
