import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Heading, Button, ButtonGroup, CardBody, CardFooter, Stack, Text } from '@chakra-ui/react'


const Item = ({ titulo, precio, id }) => {
  return (
  <Card  direction={{ base: 'column', sm: 'row' }}  overflow='hidden'  variant='outline'>
    <Stack>
        <CardBody>
            <Heading size='md'> {titulo} </Heading>
            <Text color='blue.600' fontSize='2xl'>Precio: $ {precio} </Text>
        </CardBody>
        <CardFooter>
            <ButtonGroup spacing=''>
              <Button>
                <Link to={`/producto/${id}`}>
                  Ver más detalles
                </Link>
              </Button>
            </ButtonGroup>
        </CardFooter>
    </Stack>
    </Card>
  )
}

export default Item