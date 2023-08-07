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

// export const runtime = 'edge';
// export const dynaminc = 'force-static'
// export const dynamicParams = false;
// export const cache = 'no-store'

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
                    <div className=" max-w-2xl mx-auto">
                        <Button variant="ghost" asChild><Link href="/projects">Back to Projects</Link></Button>
                        <h1 className="text-4xl font-bold mt-8">{project.attributes.title}</h1>
                        <div className="relative h-96 mt-12">
                            {project.attributes.image.data.length === 0 ? null : <Image fill loader={strapiImageLoader} src={`${project.attributes.image.data[0].attributes.hash}${project.attributes.image.data[0].attributes.ext}`} alt="test" className="object-cover" />}
                        </div>
                        {// eslint-disable-next-line
                            <Markdown children={project.attributes.content} rehypePlugins={[remarkGfm]} components={{ p: ({ node, children }) => <p className="mt-8 text-muted-foreground" >{children}</p> }} />
                        }
                    </div>
                </Section>
            </Main>
            <Footer />
        </>
    )
}