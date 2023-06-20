/** @type {import('next').NextConfig} */
const nextConfig = {
    //"output": "export",
    images: {
        domains: ["https://web-assets.sumietgore.com", "strapi-assets.sumietgore.com"]
    },
    async headers() {
        return [
            {
                source: '/about',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=604800, must-revalidate',
                    },
                ],
            },
            {
                source: '/',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=604800, must-revalidate',
                    },
                ],
            },
        ]
    },
}

module.exports = nextConfig
