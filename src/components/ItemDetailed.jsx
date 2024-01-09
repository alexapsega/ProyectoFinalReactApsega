import React from 'react'
import { Card, Heading, Button, ButtonGroup, CardBody, CardFooter, Stack, Text } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const Item = ({ titulo, descripcion, precio }) => {
  return (
  <Card  direction={{ base: 'column', sm: 'row' }}  overflow='hidden'  variant='outline'>
    <Stack>
        <CardBody>
            <Heading size='md'> {titulo} </Heading>
            <Text py='2'> {descripcion} </Text>
            <Text color='blue.600' fontSize='2xl'>Precio: {precio} </Text>
        </CardBody>
        <CardFooter>
            <ButtonGroup spacing=''>
              <ItemCount />
            </ButtonGroup>
        </CardFooter>
    </Stack>
    </Card>
  )
}

export default Item