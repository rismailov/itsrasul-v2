'use client'

import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'

export default function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <About />
            <Contact />
        </>
    )
}
