import { useAppContext } from '@/components/providers/app-provider'
import { cn, scrollToSection } from '@/lib/utils'
import { PropsWithChildren } from 'react'

export const MobileMenuItem = ({
    children,
    id,
    close,
    ...rest
}: PropsWithChildren<{ id: string; close: () => void }>) => {
    const { activeSection } = useAppContext()

    return (
        <button
            {...rest}
            onClick={() => {
                scrollToSection(id)
                close()
            }}
            className={cn(
                'w-full flex items-center justify-between space-x-4 py-1.5 text-xl font-medium [&>svg]:w-5 [&>svg]:h-5',
                activeSection === id
                    ? 'text-foreground'
                    : 'text-muted-foreground/80',
            )}
        >
            {children}
        </button>
    )
}
