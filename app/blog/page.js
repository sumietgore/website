import { Header } from "@/components/shared/header"
import { Button } from "@/components/ui/button"
import Main from "@/components/ui/main"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/shared/footer"
import Section from "@/components/ui/section"
import fetchApi, { getPosts } from "@/lib/fetchApi"

export const runtime = 'edge';
export const dynaminc = 'force-static'
export const cache = 'no-store'

export default async function Home() {
    const response = await fetchApi(getPosts, {
        "pagination": {
            "pageSize": 100
        }
    })
    const posts = response.data.posts.data

    return (
        <>
            <Header />
            <Main>
                <Section className="md:mt-0">
                    <div className="container max-w-5xl">
                        <h1 className="text-4xl font-bold">Blog</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                            {posts.map(post => <Link key={post.id} href={`/blog/${post.attributes.slug}`}><div className="group cursor-pointer">
                                <div className="relative h-56">
                                    <Image fill unoptimized src={post.attributes.image.data[0]['attributes'].url} className="rounded-lg" alt="test" />
                                </div>
                                <div className="px-1 py-2">
                                    <h1 className="text-lg font-bold group-hover:text-muted-foreground">{post.attributes.title}</h1>
                                    <p className="mt-2 text-muted-foreground">{post.attributes.description}</p>
                                </div>
                            </div>
                            </Link>)}
                        </div>
                    </div>
                </Section>
            </Main>
            <Footer />
        </>
    )
}
