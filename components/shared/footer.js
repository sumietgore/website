import LogoType from "../icons/logoType"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="mt-12 py-14">
            <div className="container flex max-w-5xl">
                <LogoType />
            </div>
            <div className="container mt-8 flex flex-col max-w-5xl">
                <p className="text-muted-foreground">Developed using <Link href="https://nextjs.org" target="blank" className="underline text-primary">Next.JS</Link>, <Link href="https://tailwindcss.com" target="blank" className="underline text-primary">TailwindCSS</Link> and <Link href="https://ui.shadcn.com" target="blank" className="underline text-primary">shadcn/ui</Link>. Icons from <Link href="https://remixicon.com/" target="blank" className="underline text-primary">Remix Icons</Link>. Hosted on <Link href="https://pages.cloudflare.com" target="blank" className="underline text-primary">Cloudflare Pages</Link>.</p>
                <p className="text-muted-foreground">Find the source code on <Link href="https://github.com/sumietgore/website" target="blank" className="underline text-primary">Github</Link>.</p>
            </div>
        </footer>
    )
}