import { Logo, Github, LinkedIn, PDF, TwitterX } from "@/components/icons"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import fetchApi, { getResume } from "@/lib/fetchApi"

export async function Header() {
    const response = await fetchApi(getResume)
    const resumeLink = await response.data.resume.data.attributes.resume.data.attributes.url

    // const resumeLink = "https://assets.sumietgore.com/CV_0e890495c9.pdf"

    return (
        <header className="h-20 flex">
            <div className="container flex gap-8 items-center max-w-5xl">
                <Link href="/"><Logo /></Link>
                <nav className="flex flex-1 gap-1">
                    <Button asChild variant="ghost"><Link href="/about">About</Link></Button>
                    <Button asChild variant="ghost"><Link href="/projects">Projects</Link></Button>
                    <Button asChild variant="ghost"><Link href="/blog" >Blog</Link></Button>
                    {/* <Button asChild variant="ghost" className="hidden md:inline-flex"><Link href="/contact" >Contact</Link></Button> */}
                </nav>
                <nav className="hidden md:flex gap-1">
                    <Button asChild variant="ghost" size="sm"><Link href="https://linkedin.com/in/sumietgore" target="blank"><LinkedIn /></Link></Button>
                    <Button asChild variant="ghost" size="sm"><Link href="https://github.com/sumietgore" target="blank"><Github /></Link></Button>
                    <Button asChild variant="ghost" size="sm"><Link href="https://twitter.com/sumietgore" target="blank"><TwitterX /></Link></Button>
                </nav>
            </div>
        </header>
    )
}

export function Header404() {
    return (
        <header className="h-20 flex">
            <div className="container flex gap-8 items-center max-w-5xl">
                <Link href="/"><Logo /></Link>
                <nav className="flex flex-1 gap-1">
                    <Button asChild variant="ghost"><Link href="/about">About</Link></Button>
                    <Button asChild variant="ghost"><Link href="/projects">Projects</Link></Button>
                    <Button asChild variant="ghost"><Link href="/blog" >Blog</Link></Button>
                    {/* <Button asChild variant="ghost" className="hidden md:inline-flex"><Link href="/contact" >Contact</Link></Button> */}
                </nav>
                <nav className="hidden md:flex gap-1">
                    <Button asChild variant="ghost" size="sm"><Link href="https://linkedin.com/in/sumietgore" target="blank"><LinkedIn /></Link></Button>
                    <Button asChild variant="ghost" size="sm"><Link href="https://github.com/sumietgore" target="blank"><Github /></Link></Button>
                    <Button asChild variant="ghost" size="sm"><Link href="https://twitter.com/sumietgore" target="blank"><TwitterX /></Link></Button>
                </nav>
            </div>
        </header>
    )
}