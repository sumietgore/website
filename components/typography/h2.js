import { twMerge } from "tailwind-merge"

export default function H2({ className }) {
    return (<h2 className={twMerge('mt-6 text-2xl font-semibold', className)}></h2>)
}