import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'



const ItemListContainer = ({ greeting }) => {


  const { categoriaId } = useParams()




  const productos = [
    { id: 1, titulo: "Libro 1", descripcion: "Descripcion del Libro 1", precio: 3000, categoria: "A"},
    { id: 2, titulo: "Libro 2", descripcion: "Descripcion del Libro 2", precio: 5000, categoria: "B"},
    { id: 3, titulo: "Libro 3", descripcion: "Descripcion del Libro 3", precio: 7000, categoria: "C"},
    { id:4, titulo: "Libro 4", descripcion: "Descripcion del Libro 4", precio: 10000, categoria: "B"},
    { id:5, titulo: "Libro 5", descripcion: "Descripcion del Libro 5", precio: 8000, categoria: "C"},
    { id:6, titulo: "Libro 6", descripcion: "Descripcion del Libro 6", precio: 2000, categoria: "A"},
    { id:7, titulo: "Libro 7", descripcion: "Descripcion del Libro 7", precio: 4000, categoria: "A"},
    { id:8, titulo: "Libro 8", descripcion: "Descripcion del Libro 8", precio: 1000, categoria: "B"},
    { id:9, titulo: "Libro 9", descripcion: "Descripcion del Libro 9", precio: 20000, categoria: "C"},
    { id:10, titulo: "Libro 10", descripcion: "Descripcion del Libro 10", precio: 6000, categoria: "A"},
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
  


  const productosFiltrados = productos.filter((producto) => producto.categoria == categoriaId)



  
  return (
  <div>{greeting}
    {categoriaId? <ItemList productos={productosFiltrados} />: <ItemList productos={productos} />}
  </div>
  )
}

export default ItemListContainer