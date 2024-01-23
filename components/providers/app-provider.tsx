'use client'

import {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from 'react'

type TAppProviderContext = {
    activeSection: string
    setActiveSection: Dispatch<SetStateAction<string>>
}

const AppProviderContext = createContext<TAppProviderContext>({
    activeSection: 'hero',
    setActiveSection: () => {},
})

export const useAppContext = () => useContext(AppProviderContext)

export function AppProvider({ children }: PropsWithChildren) {
    const [activeSection, setActiveSection] = useState('hero')

    return (
        <AppProviderContext.Provider
            value={{ activeSection, setActiveSection }}
        >
            {children}
        </AppProviderContext.Provider>
    )
}
