import React from 'react'
import ItemDetail from './ItemDetail'



const ItemDetailContainer = ({ greeting }) => {




  const productos = [
    { id: 1, nombre: "Libro 1", descripcion: "Descripcion del Libro 1", precio: 3000},
    { id: 2, nombre: "Libro 2", descripcion: "Descripcion del Libro 2", precio: 5000},
    { id: 3, nombre: "Libro 3", descripcion: "Descripcion del Libro 3", precio: 7000},
    { id:4, nombre: "Libro 4", descripcion: "Descripcion del Libro 4", precio: 10000},
  ]




  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() =>{
        resolve(productos)
      }, 3000)
  } else {
      reject("No se obtuvieron productos")
    }
  })

  
  
  mostrarProductos
  .then((resultado) =>{
    console.log(resultado)
  })
  .catch((error)=>{
    console.log(error)
  })
  
  
  return (
  <div>{greeting}
    <ItemList productos={productos} />
  </div>
  )
}

export default ItemListContainer