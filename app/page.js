import { Header } from "@/components/shared/header"
import { Button } from "@/components/ui/button"
import Main from "@/components/ui/main"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/shared/footer"
import Section from "@/components/ui/section"
import { OpenSource, Leaf, Help, Innovation, PDF } from "@/components/icons"
import { strapiImageLoader } from "@/lib/imageLoader"
import Beta from "@/components/beta"
import { ArrowRightUp } from "@/components/icons"
import fetchApi, { getResume } from "@/lib/fetchApi"
//import webImageLoader from "@/lib/imageLoader"

export const dynamic = 'force-static'
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

export const metadata = {
  title: "Sumiet Gore",
  description: "Tech nerd at work!"
}

export default async function Home() {

  const response = await fetchApi(getResume)
  const resumeLink = await response.data.resume.data.attributes.resume.data.attributes.url

  return (
    <>

      <Header />
      <Main>
        <Section>
          <div className="container flex flex-col lg:flex-row gap-6 items-center max-w-5xl">
            <div className="h-52 w-52 rounded-full bg-muted">
              <div className="relative h-40 w-40 mx-auto my-auto">
                <Image loader={strapiImageLoader} src="memoji_38db2630bd.webp" fill alt="Memoji of Sumiet Gore" priority={true} />
              </div>
            </div>
            <div className="items-center lg:items-start flex flex-col">
              <Link href="https://linkedin.com/in/sumietgore" target="blank"><p className="px-3 py-1 rounded-2xl bg-muted text-primary fill-primary text-sm flex flex-row gap-2"><span className="">Open to Internship Opportunities</span><ArrowRightUp /></p></Link>
              <h1 className="mt-2 text-6xl font-bold text-center lg:text-left">Namaste</h1>
              <p className="mt-4 text-muted-foreground text-center lg:text-left max-w-2xl">I am Sumiet (a.k.a. Sumit) Gore, an Embedded Systems Engineering student at University of Turku and Technische Universtat Berlin.</p>
              <Button asChild className="mt-6"><Link href={resumeLink} target="blank"><PDF className="fill-white mr-2" /><span>Download Resume</span></Link></Button>
            </div>
          </div>
        </Section>
        <Section>
          <div className="container flex flex-col gap-8">
            <div><h1 className="text-4xl font-bold">Vision Board</h1></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="grid justify-items-center items-center h-12 w-12 bg-muted rounded-lg">
                  <OpenSource className="fill-primary h-8 w-8" />
                </div>
                <h1 className="mt-6 font-bold text-primary text-lg">Open Source</h1>
                <p className="text-muted-foreground mt-2">I am passionate about open source, a collaborative approach to software development that fosters transparency, freedom, and community contributions. I believe in the power of collaborative innovation and aspire to be a catalyst for positive change, creating a more inclusive, sustainable, and innovative future.</p>
              </div>
              <div>
                <div className="grid justify-items-center items-center h-12 w-12 bg-muted rounded-lg">
                  <Leaf className="fill-primary h-8 w-8" />
                </div>
                <h1 className="mt-6 font-bold text-primary text-lg">Sustainable Technologies</h1>
                <p className="text-muted-foreground mt-2"> Innovations that minimize environmental impact, conserve resources, and promote a greener future. They include renewable energy, energy efficiency, waste reduction, and eco-friendly materials. Balancing economic growth with environmental preservation, these technologies create a sustainable, resilient society, reducing emissions and promoting conservation.</p>
              </div>
              <div>
                <div className="grid justify-items-center items-center h-12 w-12 bg-muted rounded-lg">
                  <Innovation className="fill-primary h-8 w-8" />
                </div>
                <h1 className="mt-6 font-bold text-primary text-lg">Innovation</h1>
                <p className="text-muted-foreground mt-2">Passionate about driving positive change through sustainable technologies. Embracing innovation, I strive to create greener, more efficient solutions that benefit society and the environment. Unleashing creative solutions and sustainable technologies to shape a brighter, more resilient world.</p>
              </div>
              <div>
                <div className="grid justify-items-center items-center h-12 w-12 bg-muted rounded-lg">
                  <Help className="fill-primary h-8 w-8" />
                </div>
                <h1 className="mt-6 font-bold text-primary text-lg">Helping Hand</h1>
                <p className="text-muted-foreground mt-2">Compassionate support for those in need, fostering kindness, empowerment, and positive change. Through assistance, resources, and advocacy, it uplifts individuals and promotes social justice. Together, we create a brighter future, one act of care at a time.</p>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="container flex flex-col gap-8 items-center max-w-5xl">
            <Image src="/engineer.svg" unoptimized alt="Engineer" width={300} height={300} />
            <h1 className="text-4xl font-bold text-center">Building the foundations of tomorrow</h1>
            <p className="text-muted-foreground text-center max-w-3xl">
              Welcome to my digital domain! As an Innovation Architect, I build tomorrows foundations. With a passion for technology and expertise in embedded systems engineering, I create meaningful solutions that drive progress. Join me on this exciting journey as we push boundaries, pioneer advancements, and shape a limitless future. Together, lets build a better world through innovation.
            </p>
            <div className="flex gap-2">
              <Button asChild><Link href="/projects">My Work</Link></Button>
              <Button asChild variant="outline"><Link href="/about">About Me</Link></Button>
            </div>
          </div>
        </Section>
        <Section>
          <div className="container max-w-5xl">
            <div className="bg-muted rounded-md py-12 px-4 flex flex-col gap-4">
              <h1 className="text-center">{"Let's chat!"}</h1>
              <Button asChild variant="link" className="text-2xl md:text-4xl text-center"><Link href="mailto:hello@sumietgore.com">hello@sumietgore.com</Link></Button>
            </div>
          </div>
        </Section>
      </Main>
      <Footer />
      <Beta />
    </>
  )
}
