import React from 'react'
import {useParams} from 'react'

const ProductId = () => {
    
  const { id } = useParams()

  console.log(id)

  return (
    <div>ProductId</div>
  )
}

export default ProductId