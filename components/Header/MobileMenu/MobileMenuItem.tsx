import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

export const MobileMenuItem = ({
    children,
    isActive,
    close,
    ...rest
}: PropsWithChildren<LinkProps & { isActive: boolean; close: () => void }>) => {
    return (
        <Link
            {...rest}
            onClick={close}
            className={cn(
                'w-full flex items-center justify-between space-x-4 py-1.5 text-xl font-medium [&>svg]:w-5 [&>svg]:h-5',
                isActive ? 'text-foreground' : 'text-muted-foreground/80',
            )}
        >
            {children}
        </Link>
    )
}
