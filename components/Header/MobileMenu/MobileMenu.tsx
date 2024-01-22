import { Button } from '@/components/ui/button'
import { IconX } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'
import { GithubLink } from '../links/GithubLink'
import { UpworkLink } from '../links/UpworkLink'
import { MobileMenuItem } from './MobileMenuItem'

export const MobileMenu = ({
    isOpen,
    close,
}: {
    isOpen: boolean
    close: () => void
}) => {
    const url = usePathname()

    return (
        <aside
            className="md:hidden z-30 fixed top-0 bottom-0 right-0 w-[300px] h-screen flex flex-col bg-background border-l will-change-transform transition-transform duration-300"
            style={{
                transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
            }}
        >
            {/* header */}
            <div className="p-6 flex items-center justify-end">
                <Button
                    onClick={close}
                    size="icon"
                    variant="ghost"
                    aria-label="Close mobile menu"
                >
                    <IconX className="w-6 h-6" />
                </Button>
            </div>

            {/* body */}
            <div className="flex-1 py-4 px-6 flex flex-col">
                <nav className="flex flex-col">
                    <MobileMenuItem
                        href="/"
                        isActive={url === '/'}
                        close={close}
                    >
                        Home
                    </MobileMenuItem>

                    <MobileMenuItem
                        href="/work"
                        isActive={url === '/work'}
                        close={close}
                    >
                        Work
                    </MobileMenuItem>

                    <MobileMenuItem
                        href="/blog"
                        isActive={url === '/blog'}
                        close={close}
                    >
                        Blog
                    </MobileMenuItem>

                    <MobileMenuItem
                        href="/contact"
                        isActive={url === '/contact'}
                        close={close}
                    >
                        Contact
                    </MobileMenuItem>
                </nav>
            </div>

            {/* footer */}
            <div className="p-6 flex items-center space-x-3">
                <GithubLink className="w-1/2" size="default" />

                <UpworkLink className="w-1/2" size="default" />
            </div>
        </aside>
    )
}
