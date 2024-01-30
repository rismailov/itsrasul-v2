import { Section } from '@/components/Section'
import { Project } from './Project'

const STACK = {
    LARAVEL: 'Laravel',
    REACT: 'React',
    NEXTJS: 'NextJS',
    POSTGRES: 'Postgres',
    TYPESCRIPT: 'Typescript',
    TAILWIND: 'Tailwind',
    PYTHON: 'Python',
    FASTAPI: 'FastAPI',
} as const

export const Projects = () => {
    return (
        <Section id="work" className="flex flex-col">
            <h1>Recent Work</h1>

            <div className="mt-4 flex flex-col md:flex-row gap-5">
                {/* using 2 flexboxes to achieve masonry effect */}
                <div className="flex flex-col gap-5 md:w-1/2">
                    <Project
                        title="portfolio v2"
                        description="The website you're currently visiting. Personal website, where I occasionally share my thoughts."
                        siteUrl="https://itsrasul.dev"
                        githubUrl="https://github.com/rismailov/itsrasul-v2"
                        stack={[
                            STACK.NEXTJS,
                            STACK.TYPESCRIPT,
                            STACK.REACT,
                            STACK.TAILWIND,
                        ]}
                    />

                    <Project
                        title="wave"
                        description="A little opiniated Inertia, React & Typescript starter template with authentication and user dashboard, to kickstart your next Laravel project."
                        githubUrl="https://github.com/rismailov/inertia-typescript-react"
                        stack={[
                            STACK.LARAVEL,
                            STACK.TYPESCRIPT,
                            STACK.REACT,
                            STACK.TAILWIND,
                            STACK.POSTGRES,
                        ]}
                    />

                    <Project
                        title="image background remover"
                        description="A simple image background remover tool using python rembg library."
                        siteUrl="https://bg-remover.itsrasul.dev"
                        githubUrl="https://github.com/rismailov/image-bg-remover"
                        stack={[
                            STACK.PYTHON,
                            STACK.FASTAPI,
                            STACK.TYPESCRIPT,
                            STACK.REACT,
                            STACK.TAILWIND,
                        ]}
                    />
                </div>

                <div className="flex flex-col gap-5 md:w-1/2">
                    <Project
                        title="shoescommerce"
                        description="Demo e-commerce project built with Laravel and React, using Nike shoes as a product. Has basic features such as authentication, filtering, sorting and admin panel."
                        siteUrl="https://shoescommerce.itsrasul.dev/"
                        githubUrl="https://github.com/rismailov/shoescommerce"
                        stack={[
                            STACK.LARAVEL,
                            STACK.TYPESCRIPT,
                            STACK.REACT,
                            STACK.TAILWIND,
                            STACK.POSTGRES,
                        ]}
                    />

                    <Project
                        title="digitUX"
                        description="Simple agency landing page with dark mode support built from design in Figma."
                        siteUrl="https://digit-ux.itsrasul.dev/"
                        githubUrl="https://github.com/rismailov/demo-project-01"
                        stack={[STACK.REACT, STACK.TAILWIND]}
                    />

                    <Project
                        title="portfolio v1"
                        description="V1 of my portfolio website."
                        siteUrl="https://v1.itsrasul.dev/"
                        githubUrl="https://github.com/rismailov/itsrasul-v1"
                        stack={[
                            STACK.NEXTJS,
                            STACK.TYPESCRIPT,
                            STACK.REACT,
                            STACK.TAILWIND,
                        ]}
                    />
                </div>
            </div>
        </Section>
    )
}
