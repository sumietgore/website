import { Header } from "@/components/shared/header"
import Main from "@/components/ui/main"
import Footer from "@/components/shared/footer"
import Section from "@/components/ui/section"
import fetchApi, { getPosts } from "@/lib/fetchApi"
import PostCard from "@/components/ui/postCard"

export const dynaminc = 'force-static'
export const cache = 'no-store'

export const metadata = {
    title: "Blog | Sumiet Gore",
    description: "Tech nerd at work!"
}

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
                            {posts.map(post => <PostCard post={post} />)}
                        </div>
                    </div>
                </Section>
            </Main>
            <Footer />
        </>
    )
}
