import { BrowserRouter, Route , Routes } from "react-router-dom";

import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Productos from "./pages/Productos";
import Layout from './pages/Layout';
import Producto from "./pages/Producto";
import Contacto from './pages/Contacto';

import "bulma/css/bulma.css";

function App() {

  const parametros = [
    {
        titulo: 'Bienvenidos a la tienda virtual en React',
        alumno: 'Marcelo Jimenez C'
    }
  ]

  return (

    <BrowserRouter>

      <Routes>
        <Route index path="/" element={<Layout/>} />
        <Route path="home" element={<Home/>}/>
        <Route path="galeria"  element={<Galeria/>}/>
        <Route path="productos" element={<Productos/>}/>
        <Route path="productos/:productoId" element={<Producto/>}/>
        <Route path="contacto" element={<Contacto/>}/>
        <Route path="*" element={<h1>404 no encontrado</h1>} />

      </Routes>    

    </BrowserRouter>

  )

}

 

export default App;