import { Button } from './ui/button'

export const Footer = () => {
    return (
        <footer className="border-t h-[90px]">
            <div className="container">
                <div className="h-full flex items-center justify-center sm:justify-start pb-1">
                    <p className="text-muted-foreground">
                        portfolio v2 • made by{' '}
                        <Button variant="link" asChild className="text-base">
                            <a href="https://github.com/rismailov">rismailov</a>
                        </Button>{' '}
                        • 2024
                    </p>
                </div>
            </div>
        </footer>
    )
}
