import { twMerge } from "tailwind-merge"

export default function Section({ children, className }) {
    return (
        <section className={twMerge("mt-4 py-6 md:mt-14 md:py-10", className)}>
            {children}
        </section>
    )
}