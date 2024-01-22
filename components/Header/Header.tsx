'use client'

import { IconMenu2 } from '@tabler/icons-react'
import { useState } from 'react'
import { Button } from '../ui/button'
import { AvailableForHireBadge } from './AvailableForHireBadge'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { NavLink } from './NavLink'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <header className="fixed top-5 left-0 right-0 z-20">
                <div className="relative container">
                    <div className="px-6 sm:px-8 py-3 flex items-center justify-between rounded-full backdrop-blur-sm border bg-background/60">
                        {/* left side */}
                        <div>
                            <Logo />

                            <nav className="hidden sm:flex items-center space-x-5">
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="/work">Work</NavLink>
                                <NavLink href="/blog">Blog</NavLink>
                                <NavLink href="/contact">Contact</NavLink>
                            </nav>
                        </div>

                        {/* right side */}
                        <div className="flex items-center space-x-3">
                            <AvailableForHireBadge className="hidden sm:flex" />

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
                className="lg:hidden z-[21] absolute inset-0 w-full h-full bg-foreground/20 dark:bg-background/50 transition-all"
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
