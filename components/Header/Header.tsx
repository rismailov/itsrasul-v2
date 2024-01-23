'use client'

import { cn, scrollToSection } from '@/lib/utils'
import { IconMenu2 } from '@tabler/icons-react'
import Link from 'next/link'
import { useState } from 'react'
import { useAppContext } from '../providers/app-provider'
import { Button } from '../ui/button'
import { MobileMenu } from './MobileMenu'
import { ThemeSwitcher } from './ThemeSwitcher'

const SECTIONS = [
    { id: 'hero', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
] as const

export const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    const { activeSection } = useAppContext()

    return (
        <>
            <header className="fixed h-[70px] top-0 left-0 right-0 z-20 bg-background/80 backdrop-blur-sm border-b">
                <div className="container">
                    <div className="h-full flex items-center justify-between">
                        {/* left side */}
                        <div>
                            <Link href="/" className="sm:hidden">
                                Rasul{' '}
                                <span className="text-muted-foreground">
                                    Ismayil
                                </span>
                            </Link>

                            <nav className="hidden sm:flex items-center space-x-5">
                                {SECTIONS.map(({ id, label }) => (
                                    <Button
                                        key={id}
                                        variant="link"
                                        onClick={() => scrollToSection(id)}
                                        className={cn(
                                            'text-base hover:no-underline',
                                            activeSection === id
                                                ? 'text-foreground'
                                                : 'text-muted-foreground',
                                        )}
                                    >
                                        {label}
                                    </Button>
                                ))}
                            </nav>
                        </div>

                        {/* right side */}
                        <div className="flex items-center space-x-3">
                            <ThemeSwitcher />

                            <Button
                                onClick={() => setMobileMenuOpen(true)}
                                size="icon"
                                className="sm:hidden"
                                aria-label="Open mobile menu"
                            >
                                <IconMenu2 className="stroke-foreground" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* page layer */}
            <div
                onClick={() => setMobileMenuOpen(false)}
                className="md:hidden z-[21] fixed inset-0 w-full h-full bg-foreground/20 dark:bg-background/50 transition-all"
                style={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    pointerEvents: isMobileMenuOpen ? 'all' : 'none',
                }}
            ></div>

            {/* mobile menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                close={() => setMobileMenuOpen(false)}
            />
        </>
    )
}
