'use client'

import { About } from '@/components/sections/About'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'

export default function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <About />
            {/* <Contact /> */}
        </>
    )
}
