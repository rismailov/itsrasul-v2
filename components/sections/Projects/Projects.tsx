import { Project } from './Project'

const STACK = {
    LARAVEL: 'Laravel',
    REACT: 'React',
    NEXTJS: 'NextJS',
    POSTGRES: 'Postgres',
    TYPESCRIPT: 'Typescript',
    TAILWIND: 'Tailwind',
} as const

export const Projects = () => {
    return (
        <section className="py-14 flex flex-col px-2 sm:px-8 md:mt-10">
            <h1>Recent Work</h1>

            <div className="mt-4 flex flex-col md:flex-row gap-5">
                {/* using 2 flexboxes to achieve masonry effect */}
                <div className="flex flex-col gap-5 md:w-1/2">
                    <Project
                        title="shoescommerce"
                        description="Demo e-commerce project built with Laravel and React, using Nike shoes as a product. Has basic features such as authentication, filtering, sorting and admin panel."
                        siteUrl="https://shoescommerce.itsrasul.dev/"
                        githubUrl="https://github.com/rismailov/shoescommerce"
                        year={2023}
                        stack={[
                            STACK.LARAVEL,
                            STACK.TYPESCRIPT,
                            STACK.REACT,
                            STACK.TAILWIND,
                            STACK.POSTGRES,
                        ]}
                    />

                    <Project
                        title="wave"
                        description="Minimal Inertia, React & Typescript starter template with authentication and user dashboard."
                        githubUrl="https://github.com/rismailov/inertia-typescript-react"
                        year={2023}
                        stack={[
                            STACK.LARAVEL,
                            STACK.TYPESCRIPT,
                            STACK.REACT,
                            STACK.TAILWIND,
                            STACK.POSTGRES,
                        ]}
                    />
                </div>

                <div className="flex flex-col gap-5 md:w-1/2">
                    <Project
                        title="portfolio"
                        description="The website you're currently visiting. Personal website, where I occasionally share my thoughts."
                        siteUrl="https://itsrasul.dev"
                        githubUrl="https://github.com/rismailov/itsrasul-v2"
                        year={2023}
                        stack={[
                            STACK.NEXTJS,
                            STACK.TYPESCRIPT,
                            STACK.REACT,
                            STACK.TAILWIND,
                        ]}
                    />

                    <Project
                        title="digitUX"
                        description="Simple agency landing page created for demo purposes."
                        siteUrl="https://digit-ux.vercel.app/"
                        githubUrl="https://github.com/rismailov/demo-project-01"
                        year={2021}
                        stack={[STACK.REACT, STACK.TAILWIND]}
                    />
                </div>
            </div>
        </section>
    )
}
