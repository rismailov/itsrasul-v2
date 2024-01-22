'use client'

import { useIsMounted } from '@/hooks/use-is-mounted'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'

export const ThemeSwitcher = () => {
    const { isMounted } = useIsMounted()
    const { theme, setTheme } = useTheme()

    return (
        <Button
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-foreground"
            aria-label="Toggle theme"
        >
            {!isMounted && (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9Z"
                    ></path>
                </svg>
            )}

            {isMounted &&
                (theme === 'dark' ? (
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        >
                            <circle cx="12" cy="12" r="4"></circle>
                            <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
                        </g>
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9Z"
                        ></path>
                    </svg>
                ))}
        </Button>
    )
}
