import me from '@/public/me.webp'
import Image from 'next/image'
import { GithubLink } from '../Header/links/GithubLink'
import { UpworkLink } from '../Header/links/UpworkLink'

export const Hero = () => {
    return (
        <section className="flex flex-col sm:flex-row justify-between px-2 sm:px-8 space-y-14 sm:space-y-0 sm:space-x-4">
            <div className="flex flex-col items-center sm:items-start">
                <h1 className="max-w-xl text-center sm:text-left">
                    Hi <span className="inline-block mr-2.5">👋</span>I&apos;m
                    Rasul, a Full Stack developer based in Baku.
                </h1>

                <p className="mt-3 max-w-2xl text-muted-foreground text-lg text-center sm:text-left">
                    For 5+ years I&apos;ve built, improved and deployed 100+
                    successful web projects. From simple landing pages to
                    full-fledged CRM systems, I&apos;ve helped clients from all
                    over the world to achieve their goals.
                </p>

                <div className="mt-6 flex items-center space-x-3">
                    <GithubLink />

                    <UpworkLink />
                </div>
            </div>

            <div className="flex-1 flex justify-center sm:justify-end">
                <div className="relative w-44 h-44">
                    <Image
                        alt="me"
                        src={me}
                        fill
                        sizes="33vw"
                        className="rounded-full object-center object-cover grayscale bg-secondary/40 dark:bg-secondary/50"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
