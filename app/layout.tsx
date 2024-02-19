import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header/Header'
import { fontSans } from '@/components/font'
import { AppProvider } from '@/components/providers/app-provider'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import './globals.css'
import { AuroraGradient } from '@/components/AuroraGradient'

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
                    <Toaster />

                    <AppProvider>
                        <AuroraGradient />

                        <Header />

                        <main className="relative z-10 flex min-h-screen pt-32">
                            <div className="container">{children}</div>
                        </main>
                    </AppProvider>

                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
