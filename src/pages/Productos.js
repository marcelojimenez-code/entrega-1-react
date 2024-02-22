import React from 'react'
import listaProductos from "../data/productos.json";
import { Link } from 'react-router-dom';

import "./productos.module.css";

function Productos(){

  //const loadImage = imageName => (require(`../img/${imageName}`).default);  

  return (
        <div>           
            <h1 className="title is-1">Productos</h1>    
                
            <div className="columns">    
            {listaProductos.map((producto) => {
                return (
                    <div className="column is-2">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">                            
                                    <img src={producto.img}  alt={producto.titulo} className='card-image' />
                                </figure>
                            </div>
                            <div className="card-content">
                                    <div className="content">
                                        <h2 className="title">{producto.titulo}</h2>
                                        <hr /><br />
                                        <p className="subtitle"> Precio : {producto.precio} </p>
                                        <p className="subtitle"> Descuento : {producto.descuento} </p><br />
                                        <div className="block"><Link className='button is-info btn-full' to={`/productos/${producto.id}`}>Mas info</Link></div>
                                    </div>
                            </div>
                        </div>
                    </div>    
                );
            })}
            </div>

        </div>    
  )
}

export default Productos
