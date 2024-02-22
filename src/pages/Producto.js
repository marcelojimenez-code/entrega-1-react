import React from 'react'
import { Link, useParams } from 'react-router-dom';
import listaProductos from "../data/productos.json";

function Producto(){

    console.log(useParams());

    const {productoId} = useParams();

    const producto = listaProductos.find((producto)=> producto.id == productoId)

    const {img, titulo, precio} = producto;

    console.log(producto);
  return (
    <div>        
        <h1 className="title is-1">Detalle de producto {productoId}</h1>
        
        <div class="columns">
          <div class="column is-one-third">&nbsp;</div>
          <div class="column">
              <div className="card">
                  <div className="card-image">
                      <figure className="image is-4by3">                            
                          <img src={img}  alt={titulo} className='card-image' />
                      </figure>
                  </div>

                  <div className="card-content">
                      <div className="content">
                          <h2 className="title">{titulo}</h2>
                          <hr /><br />
                          <p className="subtitle"> Precio : {precio} </p>
                      </div>
                  </div>
              </div>
          </div>    
          <div class="column">&nbsp;</div>
        </div>    

        <div align="center"><Link to="/productos">Volver </Link></div>
    </div>
  )
}

export default Producto
