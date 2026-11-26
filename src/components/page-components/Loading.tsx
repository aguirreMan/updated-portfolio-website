import Skeleton from './Skeleton'

export default function Loading() {
    return (
        <div
            role="status"
            className="mx-auto max-w-4xl px-6 py-20"
        >
            <div aria-hidden="true" className="space-y-4">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-8 w-2/3" />

                <div className="space-y-2.5 pt-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-11/12" />
                    <Skeleton className="h-4 w-4/5" />
                </div>
            </div>

            <span className="sr-only">Loading page content</span>
        </div>
    )
}