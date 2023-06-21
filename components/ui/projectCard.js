import Link from "next/link"
import Image from "next/image"
import { strapiImageLoader } from "../../lib/imageLoader"

export default function ProjectCard({ project }) {
    return (
        <Link key={project.id} href={`/projects/${project.attributes.slug}`}><div className="group cursor-pointer">
            <div className="relative h-56">
                {project.attributes.image.data.length === 0 ? null : <Image fill loader={strapiImageLoader} src={`${project.attributes.image.data[0].attributes.hash}${project.attributes.image.data[0].attributes.ext}`} className="object-cover rounded-lg" alt="test" />}
            </div>
            <div className="px-1 py-2">
                <h1 className="text-lg font-bold group-hover:text-muted-foreground">{project.attributes.title}</h1>
                <p className="mt-2 text-muted-foreground">{project.attributes.description}</p>
            </div>
        </div>
        </Link>
    )
}