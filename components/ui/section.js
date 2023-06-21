import { twMerge } from "tailwind-merge"

export default function Section({ children, className }) {
    return (
        <section className={twMerge("mt-4 py-4 md:mt-12 md:py-14", className)}>
            {children}
        </section>
    )
}