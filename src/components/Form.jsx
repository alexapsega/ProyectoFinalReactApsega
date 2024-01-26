import React from 'react'
import { useState } from 'react'
import { Input, Button, Text } from '@chakra-ui/react'

const Form = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [purchaseId, setPurchaseId] = useState("")

    const handleSubmit = (e) => {

        e.preventDefault()

        alert(Muchas gracias ${nombre}, nos contactaremos a ${email} para finalizar el proceso de compra)

        setEmail("")
        setNombre("")
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <Input placeholder='Nombre y apellido' type="text" onChange={(e) => setNombre(e.target.value)} value={nombre} />
                <Input placeholder='Correo electrónico' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <Button colorScheme='linkedin' type='submit'>Enviar</Button>
            </form>


            <Text>
                {`El ide de su compra es: ${purchaseId}`}
            </Text>
        </div>
    )
}

export default Form