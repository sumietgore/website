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

import moment from 'moment';

export async function generateMetadata({ params, searchParams }, parent) {

    const response = await fetchApi(getPostBySlug, {
        "filters": {
            "slug": {
                "eq": params.slug
            }
        }
    })
    const post = response.data.posts.data[0]

    return {
        title: `${post.attributes.title} | Sumiet Gore `,
    }
}

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
                    <div className=" max-w-3xl mx-auto container">
                        <Button variant="ghost" size="sm" asChild><Link href="/blog">Back to Posts</Link></Button>
                        <h1 className="text-4xl font-bold mt-8">{post.attributes.title}</h1>
                        <p className="mt-3">{moment(post.attributes.publishedAt).format("DD MMMM YYYY")}</p>
                        <div className="relative h-56 md:h-80 lg:h-96 mt-12 mb-8">
                            {post.attributes.image.data.length === 0 ? null : <Image fill loader={strapiImageLoader} src={`${post.attributes.image.data[0].attributes.hash}${post.attributes.image.data[0].attributes.ext}`} className="object-cover" alt="test" />}
                        </div>

                        {// eslint-disable-next-line
                            <Markdown children={post.attributes.content} rehypePlugins={[remarkGfm]} components={{ h1: ({ node, children }) => <h1 className="mt-8 text-2xl font-bold" >{children}</h1>, h2: ({ node, children }) => <h2 className="mt-8 text-xl font-semibold" >{children}</h2>, p: ({ node, children }) => <p className="mt-4 text-muted-foreground" >{children}</p> }} />
                        }
                    </div>
                </Section>
            </Main>
            <Footer />
        </>
    )
}