import Link from "next/link"
import Image from "next/image"
import { strapiImageLoader } from "@/lib/imageLoader"
import { AspectRatio } from "@/components/ui/aspect"

export default function PostCard({ post }) {
    return (
        <Link key={post.id} href={`/blog/${post.attributes.slug}`}><div className="group cursor-pointer">
            <AspectRatio ratio={16 / 10}>
                {post.attributes.image.data.length === 0 ? null : <Image fill loader={strapiImageLoader} src={`${post.attributes.image.data[0].attributes.hash}${post.attributes.image.data[0].attributes.ext}`} className="object-cover rounded-lg" alt="test" />}
            </AspectRatio>
            <div className="px-1 py-2">
                <h1 className="text-lg font-bold group-hover:text-muted-foreground">{post.attributes.title}</h1>
                <p className="mt-2 text-muted-foreground">{post.attributes.description}</p>
            </div>
        </div>
        </Link>
    )
}