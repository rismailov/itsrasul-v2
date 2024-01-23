import { IconCornerDownRight } from '@tabler/icons-react'
import { PropsWithChildren } from 'react'

export const AboutSection = ({
    children,
    title,
}: PropsWithChildren<{ title: string }>) => {
    return (
        <div className="flex flex-col md:flex-row gap-3 md:gap-5 justify-between items-start border-t pt-3">
            <div className="flex items-center space-x-2 text-muted-foreground">
                <IconCornerDownRight
                    className="w-5 h-5 mb-[2px]"
                    strokeWidth={1.3}
                />

                <p>{title}</p>
            </div>

            <div className="max-w-xl text-muted-foreground">{children}</div>
        </div>
    )
}
