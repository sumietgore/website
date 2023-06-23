/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    "output": "export",
    images: {
        //unoptimized: true,
        domains: ["https://web-assets.sumietgore.com", "https://strapi-assets.sumietgore.com"],
        loader: 'custom',
        loaderFile: './lib/imageLoader.js',
        formats: ['image/avif', 'image/webp'],
    },
}

module.exports = nextConfig
