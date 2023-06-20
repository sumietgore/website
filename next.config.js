/** @type {import('next').NextConfig} */
const nextConfig = {
    "output": "export",
    images: {
        unoptimized: true,
        domains: ["https://web-assets.sumietgore.com", "https://strapi-assets.sumietgore.com"]
    },
}

module.exports = nextConfig
