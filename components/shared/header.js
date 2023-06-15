import { Logo, Github, Twitter } from "@/components/icons"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
    return (
        <header className="border-b h-16 flex">
            <div className="container flex gap-8 items-center">
                <Link href="/"><Logo /></Link>
                <nav className="hidden md:flex flex-1 gap-1">
                    <Button asChild variant="link"><Link href="/about">About</Link></Button>
                    <Button asChild variant="link"><Link href="/projects">Projects</Link></Button>
                    <Button asChild variant="link"><Link href="/blog">Blog</Link></Button>
                    <Button asChild variant="link"><Link href="/resume">Resume</Link></Button>
                    <Button asChild variant="link"><Link href="/contact">Contact</Link></Button>
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