/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    "output": "export",
    images: {
        unoptimized: true,
        domains: ["https://web-assets.sumietgore.com", "https://strapi-assets.sumietgore.com"]
    },
}

module.exports = nextConfig
