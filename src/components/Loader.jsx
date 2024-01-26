import React from 'react'
import Spinner from '@chakra-ui/react'

const Loader = ( loading ) => {
  return (
    <div>
      <Spinner
        thickness='3px'
        speed='0.75s'
        emptyColor='gray.200'
        color='blue.500'
        size='md'
        />
    </div>
  )
}

export default Loader