'use client'

import { useEffect } from 'react'

export default function FourOhFour() {
    useEffect(() => {
        window.location.href = '/'
    }, [])

    return <></>
}
