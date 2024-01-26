import React from 'react'
import { Card, Heading, Button, ButtonGroup, CardBody, CardFooter, Stack, Text } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams} from 'react-router-dom'

const ItemDetail = ({ producto }) => {

  const { id } = useParams()

  return (
  <Card  direction={{ base: 'column', sm: 'row' }}  overflow='hidden'  variant='outline'>
    <Stack>
        <CardBody>
            <Heading size='md'> {producto.titulo} </Heading>
            <Text color='black.600' fontSize='2xl'>Descripción: {producto.descripcion} </Text>
            <Text color='blue.600' fontSize='2xl'>Precio: $ {producto.precio} </Text>
        </CardBody>
        <CardFooter>
          <ItemCount producto={producto}/>
        </CardFooter>
    </Stack>
    </Card>
  )
}

export default ItemDetail