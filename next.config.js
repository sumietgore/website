/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    "output": "export",
    images: {
        domains: ["https://assets.sumietgore.com"],
        loader: 'custom',
        loaderFile: './lib/imageLoader.js',
        formats: ['image/avif', 'image/webp'],
    },
}

module.exports = nextConfig
