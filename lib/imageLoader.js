'use client'

export default function webImageLoader({ src, width, quality }) {
    return `https://web-assets.sumietgore.com/${src}`
}

export function strapiImageLoader({ src, width, quality }) {



    return `https://strapi-assets.sumietgore.com/${width}_${src}`
}