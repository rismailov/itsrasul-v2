'use client'

import { useEffect, useState } from 'react'

export const useIsMounted = (): { isMounted: boolean } => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [setIsMounted])

    return { isMounted }
}
