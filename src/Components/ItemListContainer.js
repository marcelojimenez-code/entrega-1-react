import React from 'react'

function ItemListContainer(props) {
  const parametros = props.parametros;

  return (
    <section className='hero is-primary'>
    <div className='hero-body'>
      <p className='title'>{parametros[0].titulo}</p>
      <p class="subtitle">
        Alumno <strong>{parametros[0].alumno}</strong> 
      </p>
    </div>
    </section>
  );
}

export default ItemListContainer
