import { NavLink } from './NavLink'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => {
    return (
        <header className="">
            <div className="container py-4">
                <div className="flex items-center justify-between">
                    <nav className="flex items-center space-x-4">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                        <NavLink href="/blog">Blog</NavLink>
                    </nav>

                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    )
}
