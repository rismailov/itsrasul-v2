import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function sleep(ms = 500): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export function scrollToSection(id: string) {
    const section = document.querySelector(`[data-section=${id}]`)

    if (!section) {
        return
    }

    const yOffset = -100
    const y = section!.getBoundingClientRect().top + window.scrollY + yOffset

    window.scrollTo({
        top: y,
        behavior: 'smooth',
    })
}
