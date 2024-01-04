import React from 'react'
import { Card, Heading, CardBody, CardFooter } from '@chakra-ui/react'

const Item = ({titulo, descripcion, precio}) => {
  return (
  <Card  direction={{ base: 'column', sm: 'row' }}  overflow='hidden'  variant='outline'>
    <Stack>
        <CardBody>
            <Heading size='md'>{titulo}</Heading>
            <Text py='2'>{descripcion}</Text>
            <Text color='blue.600' fontSize='2xl'>{precio}</Text>
        </CardBody>
        <CardFooter>
            <Button variant='solid' colorScheme='blue'> Buy Latte </Button>
        </CardFooter>
    </Stack>
    </Card>
  )
}

export default Item