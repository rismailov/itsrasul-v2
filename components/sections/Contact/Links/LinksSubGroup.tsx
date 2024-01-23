import { PropsWithChildren } from 'react'

export const LinksSubGroup = ({
    children,
    title,
}: PropsWithChildren<{ title: string }>) => {
    return (
        <div>
            <div className="flex items-center">
                <p className="text-muted-foreground break-keep">{title}</p>

                <span className="inline-block ml-5 flex-1 border-t border-border border-dashed shrink"></span>
            </div>

            <div className="flex flex-col items-start">{children}</div>
        </div>
    )
}
