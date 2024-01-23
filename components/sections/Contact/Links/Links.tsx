import { Button } from '@/components/ui/button'
import { LinksSubGroup } from './LinksSubGroup'

export const Links = () => {
    return (
        <section className="flex-1 flex flex-col space-y-6 pt-1">
            <LinksSubGroup title="Freelance">
                <Button variant="link" className="text-base" asChild>
                    <a
                        href="https://www.upwork.com/freelancers/~016e4171185bc6ec63"
                        target="_blank"
                    >
                        Upwork
                    </a>
                </Button>

                <Button variant="link" className="text-base" asChild>
                    <a
                        href="https://www.fiverr.com/itsrasul?up_rollout=true"
                        target="_blank"
                    >
                        Fiverr
                    </a>
                </Button>
            </LinksSubGroup>

            <LinksSubGroup title="Messengers">
                <Button variant="link" className="text-base" asChild>
                    <a href="https://telegram.me/nvrasul" target="_blank">
                        Telegram
                    </a>
                </Button>

                <Button variant="link" className="text-base">
                    <a href="https://wa.link/1rlt5m" target="_blank">
                        Whatsapp
                    </a>
                </Button>
            </LinksSubGroup>

            <LinksSubGroup title="E-mail">
                <Button variant="link" className="text-base" asChild>
                    <a href="mailto:hello@itsrasul.dev">hello@itsrasul.dev</a>
                </Button>
            </LinksSubGroup>

            <LinksSubGroup title="Tel">
                <Button variant="link" className="text-base" asChild>
                    <a href="tel:+994554206662">+994 55 420 6662</a>
                </Button>
            </LinksSubGroup>
        </section>
    )
}
