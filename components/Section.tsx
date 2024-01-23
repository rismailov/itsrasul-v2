import { cn } from '@/lib/utils'
import { PropsWithChildren, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAppContext } from './providers/app-provider'

type Props = PropsWithChildren<{
    id: string
    className?: string
}>

export const Section = ({ id, className, children, ...rest }: Props) => {
    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '-30% 0px -50% 0px',
    })

    const { setActiveSection } = useAppContext()

    useEffect(() => {
        if (inView) {
            setActiveSection(id)
        }
    }, [id, inView, setActiveSection])

    return (
        <section
            ref={ref}
            data-section={id}
            className={cn('mb-20', className)}
            {...rest}
        >
            {children}
        </section>
    )
}
