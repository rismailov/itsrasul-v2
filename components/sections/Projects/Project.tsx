import { GithubSprite } from '@/components/sprites/GithubSprite'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { IconArrowUpRight } from '@tabler/icons-react'
import Link from 'next/link'

export const Project = ({
    title,
    description,
    siteUrl,
    githubUrl,
    year,
    stack,
}: {
    title: string
    description: string
    siteUrl?: string
    githubUrl?: string
    year: number
    stack: string[]
}) => {
    return (
        <div className="border rounded-xl dark:bg-secondary h-fit">
            {/* card header */}
            <div className="p-6 pt-5 pb-0 flex items-center">
                <h3 className="font-medium">{title}</h3>

                <h3 className="text-muted-foreground/50 font-normal">
                    , {year}
                </h3>
            </div>

            {/* card body */}
            <div className="pt-2 px-6 pb-0">
                <p className="text-muted-foreground">{description}</p>
            </div>

            {/* card footer */}
            <div className="px-6 py-5">
                {/* tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                    {stack.map((el, k) => (
                        <Badge
                            key={k}
                            variant="secondary"
                            className="dark:bg-accent"
                        >
                            {el}
                        </Badge>
                    ))}
                </div>

                {/* links */}
                <div className="flex items-center space-x-3">
                    {siteUrl && (
                        <Button size="sm" asChild aria-label="Visit project">
                            <Link href={siteUrl} target="_blank">
                                <span>Live Demo</span>

                                <IconArrowUpRight className="w-5 h-5 ml-1 -mr-px" />
                            </Link>
                        </Button>
                    )}

                    {githubUrl && (
                        <Button
                            variant="secondary"
                            size="sm"
                            asChild
                            aria-label="View source code"
                        >
                            <Link href={githubUrl} target="_blank">
                                <span>View Source</span>

                                <GithubSprite className="w-4 h-4 fill-foreground ml-2.5" />
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}
