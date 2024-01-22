import Link from 'next/link'

export const Logo = () => {
    return (
        <Link href="/" className="sm:hidden">
            Rasul <span className="text-muted-foreground">Ismayil</span>
        </Link>
    )
}
