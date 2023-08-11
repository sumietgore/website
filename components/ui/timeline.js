export function TimelineContainer({ children }) {
    return (
        <ol class="relative border-l border-border">{children}</ol>
    )
}

export function TimelineItem({ children }) {
    return (
        <li class="mb-10 ml-4"><div class="absolute w-4 h-4 bg-border rounded-full mt-1.5 -left-2 border border-border"></div>{children}</li>
    )
}

export function TimelineTime({ children }) {
    return (
        <time class="mb-1 text-sm font-normal leading-none text-muted-foreground">{children}</time>
    )
}

export function TimelineTitle({ children }) {
    return (
        <h3 class="text-lg font-bold text-primary">{children}</h3>
    )
}

export function TimelineContent({ children }) {
    return (
        <div class="mb-4 mt-3 text-sm font-normal text-primary">{children}</div>
    )
}