import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AboutSection } from './AboutSection'
import { Section } from '@/components/Section'

export const About = () => {
    return (
        <Section id="about" className="flex flex-col -mt-2">
            <h1>About Me</h1>

            <div className="mt-5 flex flex-col space-y-10">
                <AboutSection title="Work">
                    <p>
                        Currently I&apos;m focused on freelancing as a solo
                        developer on{' '}
                        <Button
                            variant="link"
                            className="text-base underline hover:no-underline font-normal"
                            asChild
                        >
                            <a
                                href="https://www.upwork.com/freelancers/~016e4171185bc6ec63"
                                target="_blank"
                            >
                                Upwork
                            </a>
                        </Button>{' '}
                        and{' '}
                        <Button
                            variant="link"
                            className="text-base underline hover:no-underline font-normal"
                            asChild
                        >
                            <a
                                href="https://www.fiverr.com/itsrasul?up_rollout=true"
                                target="_blank"
                            >
                                Fiverr
                            </a>
                        </Button>
                        . Whether you want a new website built from scratch or
                        improve an existing one, feel free to reach out to me on
                        these platforms.
                    </p>
                </AboutSection>

                <AboutSection title="Stack">
                    <div>
                        <p>
                            In my free time I like to learn new technologies and
                            tinker with Python and Golang. But my main expertise
                            lies in web development and here are my trusty tools
                            to build modern and performant websites:
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1">
                            <Badge>PHP</Badge>
                            <Badge>Laravel</Badge>
                            <Badge>Typescript</Badge>
                            <Badge>React</Badge>
                            <Badge>Postgres</Badge>
                            <Badge>NextJS</Badge>
                            <Badge>Tailwind</Badge>
                            <Badge>Inertia</Badge>
                        </div>
                    </div>
                </AboutSection>

                <AboutSection title="Services">
                    <p>
                        I focus on building professional, responsive and
                        SEO-optimized websites. These include, but not limited
                        to landing pages, e-commerce shops, portfolios or
                        personal sites and CRM/CMS systems.
                    </p>
                </AboutSection>
            </div>
        </Section>
    )
}
