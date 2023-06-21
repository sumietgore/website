'use client'
export default function webImageLoader({ src, width, quality }) {
    console.log(width)
    return `https://web-assets.sumietgore.com/${src}`
}

export function strapiImageLoader({ src, width, quality }) {
    // console.log(src)
    // console.log("STRAPI" + width)
    return `https://strapi-assets.sumietgore.com/${width}_${src}`
}