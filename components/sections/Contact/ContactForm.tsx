'use client'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sleep } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const schema = z.object({
    name: z
        .string({ required_error: 'Name is required' })
        .min(3, { message: 'Name must contain at least 3 characters' })
        .max(20, {
            message: 'Name can contain at most 20 characters',
        }),
    email: z
        .string({ required_error: 'E-mail is required' })
        .email({ message: 'Invalid e-mail address' }),
    message: z
        .string({ required_error: 'Message is required' })
        .min(3, { message: 'Message must contain at least 3 characters' })
        .max(300, {
            message: 'Message can contain at most 300 characters',
        }),
})

export const ContactForm = () => {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    })

    async function onSubmit(data: z.infer<typeof schema>) {
        const url = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage`

        await sleep(300) // delay for animation

        try {
            await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'post',
                body: JSON.stringify({
                    chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHANNEL_CHAT_ID,
                    text: `New message from ${data.name} (${data.email}): ${data.message}`,
                }),
            })

            toast('Sent. Thank you for your message.')

            form.reset()
        } catch (error) {
            if (error) {
                toast("Oops! Couldn't send a message.")
            }
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Name" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="E-mail"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea
                                    placeholder="Message"
                                    rows={3}
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="pt-2">
                    <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                    >
                        {form.formState.isSubmitting ? 'Sending...' : 'Send'}
                    </Button>
                </div>
            </form>
        </Form>
    )
}
