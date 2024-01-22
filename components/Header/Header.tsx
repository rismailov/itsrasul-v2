'use client'

import { IconMenu2 } from '@tabler/icons-react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../ui/button'
import { MobileMenu } from './MobileMenu'
import { NavLink } from './NavLink'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <header className="fixed top-4 left-0 right-0 z-20">
                <div className="relative container">
                    <div className="px-6 sm:px-8 py-3 flex items-center justify-between rounded-full backdrop-blur-sm border bg-background/60">
                        {/* left side */}
                        <div>
                            <Link href="/" className="sm:hidden">
                                Rasul{' '}
                                <span className="text-muted-foreground">
                                    Ismayil
                                </span>
                            </Link>

                            <nav className="hidden sm:flex items-center space-x-5">
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="/work">Work</NavLink>
                                <NavLink href="/blog">Blog</NavLink>
                                <NavLink href="/contact">Contact</NavLink>
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
