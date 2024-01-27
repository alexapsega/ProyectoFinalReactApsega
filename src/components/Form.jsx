import React from 'react'
import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { Input, Button, Text } from '@chakra-ui/react'

const Form = () => {

    const cart = [
        {p: "Producto A"}
        {p: "Producto B"}
    ]

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [purchaseId, setPurchaseId] = useState("")

    const db = getFirestore()
    const handleSubmit = (e) => {
        e.preventDefault()
        
        addDoc(ordersCollection, order).then(({id}) =>
            setPurchaseId(id))

        alert(Muchas gracias ${nombre}, nos contactaremos a ${email} para finalizar el proceso de compra)

        setEmail("") 
        setNombre("")
    }

    const order = {
        cliente = { nombre, email },
        items: cart
    }

    const ordersCollection = collection(db, "orden")

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