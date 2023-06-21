import { twMerge } from "tailwind-merge"

export default function P({ className, children }) {
    return (<p className={twMerge('mt-4 text-muted-foreground', className)}>{children}</p>)
}