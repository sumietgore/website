import fetchApi, { getPostsSitemap } from "@/lib/fetchApi"

export default async function sitemap() {
    const response = await fetchApi(getPostsSitemap, { "pagination": { "pageSize": 100 } })
    const posts = response.data.posts.data

    var sitemap = [{
        url: `${process.env.HOST_URL}`,
        lastModified: new Date(),
    },
    {
        url: `${process.env.HOST_URL}/about`,
        lastModified: new Date(),
    },
    {
        url: `${process.env.HOST_URL}/blog`,
        lastModified: new Date(),
    },
    {
        url: `${process.env.HOST_URL}/projects`,
        lastModified: new Date(),
    },
    {
        url: `${process.env.HOST_URL}/contact`,
        lastModified: new Date(),
    },]

    posts.map(post => sitemap.push({ url: `${process.env.HOST_URL}/blog/${post.attributes.slug}`, lastModified: post.attributes.updatedAt }))

    return sitemap
}