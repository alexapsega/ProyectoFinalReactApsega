import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
  console.log(productos)
    return (
    <div>
        {
            productos.map((p)=>{
                return (
                    <Item
                    titulo = {productos.titulo}
                    descripcion = {productos.descripcion}
                    precio = {productos.precio}
                    />
                )
            })
        }
    </div>
  )
}

export default ItemList