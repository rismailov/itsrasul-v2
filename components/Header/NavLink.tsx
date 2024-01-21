'use client'

import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { Button } from '../ui/button'

export const NavLink = ({
    children,
    ...props
}: PropsWithChildren<LinkProps>) => {
    const url = usePathname()

    return (
        <Button
            variant="link"
            asChild
            className={cn(
                'text-base hover:no-underline p-0',
                props.href === url
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
            )}
        >
            <Link {...props}>{children}</Link>
        </Button>
    )
}
