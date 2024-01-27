import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'


const ItemListContainer = ({ greeting }) => {


  const { categoriaId } = useParams()

  const [productos, setProductos] = useState([])

  useEffect(() => {
      const db = getFirestore()

      const itemCollection = collection(db,"libros")

      getDocs(itemCollection).then((snapshot) => {
         const docs = snapshot.docs.map((doc) => doc.data())
         setProductos(docs) 
      })

  },[])



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
    console.log(productos.id)
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