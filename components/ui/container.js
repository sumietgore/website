import { twMerge } from "tailwind-merge"

export default function Container({ children, className }) {
    return (
        <div className={twMerge('container', className)}>{children}</div>
    )
}