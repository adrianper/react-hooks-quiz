/*
    *El componente Mask debe abrirse desde un componente externo
    *Debe renderizarse en el body del html
    *Debe ser obligatorio que se defina la prop "size", puede recibir las props adicionales que sean necesarias
    *El contenedor Mask puede mostrar cualquier contenido que se le pase como hijo
*/
import React, { useState } from 'react'


const styles = {
    size: {
        s: {
            width: '70vw',
            height: '60vh'
        },
        l: {
            width: '90vw',
            height: '80vh'
        },
    },
    container: {
        margin: 'auto',
        top: 0,
        left: 0,
        background: '#000000aa'
    }
}

const Mask = () => {

    const [isOpen] = useState(false)

    if(!isOpen) {
        return null
    }

    return (
        <div style={styles.container} />
    )
}

export default Mask