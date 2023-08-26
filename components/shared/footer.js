import { LogoType, Github, LinkedIn, TwitterX, PDF } from "@/components/icons"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import fetchApi, { getResume } from "@/lib/fetchApi"

export default async function Footer() {
    const response = await fetchApi(getResume)
    const resumeLink = await response.data.resume.data.attributes.resume.data.attributes.url

    // const resumeLink = "https://assets.sumietgore.com/CV_0e890495c9.pdf"

    return (
        <footer className="mt-12 py-14">
            <div className="container max-w-5xl gap-8 grid grid-cols-1 lg:grid-cols-2">
                <LogoType />
                <div className="flex flex-row justify-start lg:justify-end">
                    <Button asChild variant="ghost" size="sm"><Link href="https://linkedin.com/in/sumietgore" target="blank"><LinkedIn /></Link></Button>
                    <Button asChild variant="ghost" size="sm"><Link href="https://github.com/sumietgore" target="blank"><Github /></Link></Button>
                    <Button asChild variant="ghost" size="sm"><Link href="https://twitter.com/sumietgore" target="blank"><TwitterX /></Link></Button>
                    <Button asChild className="ml-2"><Link href={resumeLink} target="blank"><PDF className="fill-white mr-2" /><span>Download Resume</span></Link></Button>
                </div>
            </div>

            <div className="container mt-8 flex flex-col max-w-5xl">
                {/* <p className="text-muted-foreground text-sm">Developed using <Link href="https://nextjs.org" target="blank" className="underline text-primary">Next.JS</Link>, <Link href="https://tailwindcss.com" target="blank" className="underline text-primary">TailwindCSS</Link> and <Link href="https://ui.shadcn.com" target="blank" className="underline text-primary">shadcn/ui</Link>. Icons from <Link href="https://remixicon.com/" target="blank" className="underline text-primary">Remix Icons</Link>. Hosted on <Link href="https://pages.cloudflare.com" target="blank" className="underline text-primary">Cloudflare Pages</Link>.</p> */}
                {/* <p className="text-muted-foreground">Find the source code on <Link href="https://github.com/sumietgore/website" target="blank" className="underline text-primary">Github</Link>.</p> */}
                <p className="text-muted-foreground text-sm mt-1">Copyright © 2023, Sumiet Gore</p>
            </div>
        </footer>
    )
}

export function Footer404() {
    return (
        <footer className="mt-12 py-14">
            <div className="container max-w-5xl gap-8 grid grid-cols-1 lg:grid-cols-2">
                <LogoType />
                <div className="flex flex-row justify-start lg:justify-end">
                    <Button asChild variant="ghost" size="sm"><Link href="https://linkedin.com/in/sumietgore" target="blank"><LinkedIn /></Link></Button>
                    <Button asChild variant="ghost" size="sm"><Link href="https://github.com/sumietgore" target="blank"><Github /></Link></Button>
                    <Button asChild variant="ghost" size="sm"><Link href="https://twitter.com/sumietgore" target="blank"><TwitterX /></Link></Button>
                </div>
            </div>

            <div className="container mt-8 flex flex-col max-w-5xl">
                {/* <p className="text-muted-foreground text-sm">Developed using <Link href="https://nextjs.org" target="blank" className="underline text-primary">Next.JS</Link>, <Link href="https://tailwindcss.com" target="blank" className="underline text-primary">TailwindCSS</Link> and <Link href="https://ui.shadcn.com" target="blank" className="underline text-primary">shadcn/ui</Link>. Icons from <Link href="https://remixicon.com/" target="blank" className="underline text-primary">Remix Icons</Link>. Hosted on <Link href="https://pages.cloudflare.com" target="blank" className="underline text-primary">Cloudflare Pages</Link>.</p> */}
                {/* <p className="text-muted-foreground">Find the source code on <Link href="https://github.com/sumietgore/website" target="blank" className="underline text-primary">Github</Link>.</p> */}
                <p className="text-muted-foreground text-sm mt-1">Copyright © 2023, Sumiet Gore</p>
            </div>
        </footer>
    )
}