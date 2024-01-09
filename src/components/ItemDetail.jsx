import React from 'react'
import Item from './Item'

const ItemDetail = ({ productos }) => {
  console.log(productos)
    return (
    <div>
        {
            productos.map((p)=>{
                return (
                    <ItemDetailed
                    key = {p.id}
                    titulo = {p.nombre}
                    descripcion = {p.descripcion}
                    precio = {p.precio}
                    />
                )
            })
        }
    </div>
  )
}

export default ItemList