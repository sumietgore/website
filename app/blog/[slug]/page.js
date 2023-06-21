import { Header } from "@/components/shared/header"
import { Button } from "@/components/ui/button"
import Main from "@/components/ui/main"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/shared/footer"
import Section from "@/components/ui/section"
import fetchApi, { getPostBySlug, getPostSlugs } from "@/lib/fetchApi"
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { strapiImageLoader } from "@/lib/imageLoader"

// export const runtime = 'edge';
// export const dynaminc = 'force-static'
// export const dynamicParams = false;
// export const cache = 'no-store'

export async function generateStaticParams() {
    const response = await fetchApi(getPostSlugs, {
        "pagination": {
            "pageSize": 100
        }
    })

    const posts = response.data.posts.data

    return posts.map((post) => ({
        slug: post.attributes.slug,
    }))
}

export default async function Page({ params }) {

    const response = await fetchApi(getPostBySlug, {
        "filters": {
            "slug": {
                "eq": params.slug
            }
        }
    })
    const post = response.data.posts.data[0]

    return (
        <>
            <Header />
            <Main>
                <Section className='md:mt-0'>
                    <div className=" max-w-2xl mx-auto">
                        <Button variant="ghost" asChild><Link href="/blog">Back to Posts</Link></Button>
                        <div className="relative h-96 mt-8">
                            {post.attributes.image.data.length === 0 ? null : <Image fill loader={strapiImageLoader} src={`${post.attributes.image.data[0].attributes.hash}${post.attributes.image.data[0].attributes.ext}`} className="object-cover" alt="test" />}
                        </div>
                        <h1 className="text-4xl font-bold mt-12">{post.attributes.title}</h1>
                        {// eslint-disable-next-line
                            <Markdown children={post.attributes.content} rehypePlugins={[remarkGfm]} components={{ p: ({ node, children }) => <p className="mt-8 text-muted-foreground" >{children}</p> }} />
                        }
                    </div>
                </Section>
            </Main>
            <Footer />
        </>
    )
}