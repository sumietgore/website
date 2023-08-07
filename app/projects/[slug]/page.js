import { Header } from "@/components/shared/header"
import { Button } from "@/components/ui/button"
import Main from "@/components/ui/main"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/shared/footer"
import Section from "@/components/ui/section"
import fetchApi, { getProjectBySlug, getProjectSlugs } from "@/lib/fetchApi"
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { strapiImageLoader } from "@/lib/imageLoader"
import { AspectRatio } from "@/components/ui/aspect"

export async function generateMetadata({ params, searchParams }, parent) {

    const response = await fetchApi(getProjectBySlug, {
        "filters": {
            "slug": {
                "eq": params.slug
            }
        }
    })

    const project = response.data.projects.data[0]

    return {
        title: `${project.attributes.title} | Sumiet Gore `,
    }
}

export async function generateStaticParams() {
    const response = await fetchApi(getProjectSlugs, {
        "pagination": {
            "pageSize": 100
        }
    })

    const projects = response.data.projects.data

    return projects.map((project) => ({
        slug: project.attributes.slug,
    }))
}

export default async function Page({ params }) {

    const response = await fetchApi(getProjectBySlug, {
        "filters": {
            "slug": {
                "eq": params.slug
            }
        }
    })

    const project = response.data.projects.data[0]

    return (
        <>
            <Header />
            <Main>
                <Section className='md:mt-0'>
                    <div className=" max-w-3xl container mx-auto">
                        <Button variant="ghost" asChild size="sm"><Link href="/projects">Back to Projects</Link></Button>
                        <h1 className="text-4xl font-bold mt-8">{project.attributes.title}</h1>
                        <AspectRatio ratio={16 / 10} className="relative mt-6 mb-6">
                            {project.attributes.image.data.length === 0 ? null : <Image fill loader={strapiImageLoader} src={`${project.attributes.image.data[0].attributes.hash}${project.attributes.image.data[0].attributes.ext}`} alt="test" className="object-cover" />}
                        </AspectRatio>
                        {// eslint-disable-next-line
                            <Markdown children={project.attributes.content} rehypePlugins={[remarkGfm]} components={{ h1: ({ node, children }) => <h1 className="mt-8 text-2xl font-bold" >{children}</h1>, h2: ({ node, children }) => <h2 className="mt-8 text-xl font-semibold" >{children}</h2>, p: ({ node, children }) => <p className="mt-4 text-muted-foreground" >{children}</p> }} />
                        }
                    </div>
                </Section>
            </Main>
            <Footer />
        </>
    )
}