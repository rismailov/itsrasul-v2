import { Button, ButtonProps } from '@/components/ui/button'
import { IconBrandUpwork } from '@tabler/icons-react'
import Link from 'next/link'

export const UpworkLink = (props: ButtonProps) => {
    return (
        <Button variant="secondary" size="lg" {...props} asChild>
            <Link
                href="https://www.upwork.com/freelancers/~016e4171185bc6ec63"
                target="_blank"
                aria-label="Visit Upwork profile"
            >
                <span>Upwork</span>

                <IconBrandUpwork className="w-6 h-6 ml-2.5" />
            </Link>
        </Button>
    )
}
