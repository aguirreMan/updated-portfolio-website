import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

export default function Skeleton({ className, ...props }: ComponentProps<'div'>) {
    return (
        <div
            data-slot="skeleton"
            className={cn(
                'animate-pulse motion-reduce:animate-none rounded-md bg-muted',
                className
            )}
            {...props}
        />
    )
}