import React from 'react'
import ItemDetailed from './ItemDetailed'

const ItemList = ({ productos }) => {
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