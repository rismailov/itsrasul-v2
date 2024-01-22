import { cn } from '@/lib/utils'

export const AvailableForHireBadge = ({ className }: { className: string }) => {
    return (
        <div
            className={cn(
                'flex items-center space-x-2 py-1 px-3 rounded-full bg-green-600/10 dark:bg-green-400/10',
                className,
            )}
        >
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 dark:bg-green-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600 dark:bg-green-400"></span>
            </span>

            <span className="text-sm font-medium text-green-600 dark:text-green-400">
                Available for hire
            </span>
        </div>
    )
}
