import { Header } from "@/components/shared/header"
import Main from "@/components/ui/main"
import Footer from "@/components/shared/footer"
import Section from "@/components/ui/section"
import fetchApi, { getProjects } from "@/lib/fetchApi"
import ProjectCard from "@/components/ui/projectCard"

export const metadata = {
    title: "Projects | Sumiet Gore",
    description: "Tech nerd at work!"
}

export default async function Home() {
    const response = await fetchApi(getProjects, {
        "pagination": {
            "pageSize": 100
        }
    })
    const projects = response.data.projects.data

    return (
        <>
            <Header />
            <Main>
                <Section className="md:mt-0">
                    <div className="container max-w-5xl">
                        <h1 className="text-4xl font-bold">Projects</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                            {projects.map(project => <ProjectCard project={project} />)}
                        </div>
                    </div>
                </Section>
            </Main>
            <Footer />
        </>
    )
}
