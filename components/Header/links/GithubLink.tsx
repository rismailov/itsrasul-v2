import { GithubSprite } from '@/components/sprites/GithubSprite'
import { Button, ButtonProps } from '@/components/ui/button'
import Link from 'next/link'

export const GithubLink = (props: ButtonProps) => {
    return (
        <Button asChild {...props}>
            <Link
                href="https://github.com/rismailov"
                target="_blank"
                aria-label="Visit Github profile"
            >
                <span>Github</span>

                <GithubSprite className="w-[18px] h-[18px] fill-background ml-3" />
            </Link>
        </Button>
    )
}
