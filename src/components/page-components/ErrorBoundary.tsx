import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Button } from '@/components/ui/button'

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
    state: ErrorBoundaryState = { hasError: false }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        if (import.meta.env.DEV) {
            console.error('Route/UI error caught by ErrorBoundary:', error, errorInfo)
        }
    }

    render() {
        return this.state.hasError ? <RouteError /> : this.props.children
    }
}

function RouteError() {
    return (
        <div
            role="alert"
            className="mx-auto flex min-h-[45vh] max-w-xl flex-col items-start justify-center gap-4 px-6 py-20"
        >
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Unable to load view
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Something went wrong loading this section.
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
                Reload the page to try again, or use the navigation to visit another page.
            </p>
            <Button type="button" onClick={() => window.location.reload()}>
                Reload page
            </Button>
        </div>
    )
}
