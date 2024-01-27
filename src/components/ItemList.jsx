import React from 'react'
import Item from './Item'
import { Center, Wrap, WrapItem } from '@chakra-ui/react'


const ItemList = ({ productos }) => {
    return (
    <div>
        {
            productos.map((p)=>{
                return (
                    <Wrap spacing='30px' justify='center'>
                            <WrapItem>
                                <Center>
                                    <Item
                                    key = {p.id}
                                    titulo = {p.titulo}
                                    precio = {p.precio}
                                    id={p.id}
                                    />
                                </Center>
                            </WrapItem>
                    </Wrap>
                )
            })
        }
    </div>
  )
}

export default ItemList