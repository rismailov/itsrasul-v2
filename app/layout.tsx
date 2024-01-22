import { Header } from '@/components/Header/Header'
import { fontSans } from '@/components/font'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Rasul Ismayil - Full Stack Web Developer',
    description: 'Portfolio',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable,
                )}
            >
                <ThemeProvider
                    enableSystem
                    attribute="class"
                    defaultTheme="system"
                    disableTransitionOnChange
                >
                    <Header />

                    {/* aurora gradient  */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="relative w-full h-full">
                            <div
                                className="absolute top-0 left-0 right-0 -mt-28 flex -rotate-45 justify-center"
                                style={{
                                    filter: 'blur(30px) saturate(7) hue-rotate(0deg)',
                                    opacity: 0.5,
                                }}
                            >
                                <div className="h-48 w-8 bg-indigo-500"></div>
                                <div className="h-80 w-10 bg-blue-500"></div>
                                <div className="h-80 w-10 bg-emerald-500"></div>
                            </div>
                        </div>
                    </div>

                    <main className="z-10 flex min-h-screen pt-32 sm:pt-36">
                        <div className="container">{children}</div>
                    </main>
                </ThemeProvider>
            </body>
        </html>
    )
}
