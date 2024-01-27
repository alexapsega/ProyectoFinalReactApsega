import React from 'react'
import ItemDetail from './ItemDetail.jsx'
import ItemList from './ItemList.jsx'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'



const ItemDetailContainer = () => {

  const [producto, setProducto] = useState([])
  const { id } = useParams()
  
  console.log(id)

  useEffect (() => {
      const db = getFirestore()

      const oneItem = doc(db,"libros",`${id}`)
        getDoc(oneItem).then((snapshot)=>{
          if(snapshot.exists()){
            const doc = snapshot.data()
            setProducto(doc)
            }
          })
    }, [])

  const mostrarProductos = new Promise((resolve, reject) => {
    if (producto.length > 0) {
        setTimeout(() =>{
          resolve(producto)
        }, 3000)
    } else {
        reject("No se pudo encontrar el libro")
    }
  })
  
  mostrarProductos
    .then((resultado) =>{
      console.log(resultado)
    })
    .catch((error)=>{
      console.log(error)
    })

  const productoFiltrado = producto.find((producto)=> producto.id == id)

  return (
    <div>
        <ItemDetail
            producto={productoFiltrado}
        />
    </div>
  )
}

export default ItemDetailContainer