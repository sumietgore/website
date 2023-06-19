import { twMerge } from "tailwind-merge"

export default function Main({ children, className }) {
    return (
        <main className={twMerge('', className)}>{children}</main>
    )
}