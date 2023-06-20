import { Logo, Github, Twitter } from "@/components/icons"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="h-20 flex">
            <div className="container flex gap-8 items-center max-w-5xl">
                <Link href="/" prefetch={false}><Logo /></Link>
                <nav className="flex flex-1 gap-1">
                    <Button asChild variant="ghost"><Link href="/about" prefetch={false}>About</Link></Button>
                    <Button asChild variant="ghost"><Link href="/projects" prefetch={false}>Projects</Link></Button>
                    <Button asChild variant="ghost"><Link href="/blog" prefetch={false}>Blog</Link></Button>
                    <Button asChild variant="ghost" className="hidden md:inline-flex"><Link href="/contact" prefetch={false}>Contact</Link></Button>
                </nav>
                <nav className="hidden md:flex gap-1">
                    <Button asChild variant="ghost" size="sm"><Link href="https://github.com/sumietgore" target="blank"><Github /></Link></Button>
                    <Button asChild variant="ghost" size="sm"><Link href="https://twitter.com/sumietgore" target="blank"><Twitter /></Link></Button>
                    <Button asChild className="ml-2"><Link href="https://github.com/sumietgore" target="blank">Download Resume</Link></Button>
                </nav>
            </div>
        </header>
    )
}