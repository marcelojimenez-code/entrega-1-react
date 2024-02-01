import React from 'react'

const ItemListContainer = () => {

  let usuario = {nombre : "Marcelo", apellido: "Jimenez"}

  return (
    <section className="hero is-white">
        <div className="hero-body">
            <p className="title">
                {usuario.nombre} {usuario.apellido}
            </p>
        </div>
    </section>
  )

}

export default ItemListContainer
