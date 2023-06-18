import { Header } from "@/components/shared/header"
import { Button } from "@/components/ui/button"
import Main from "@/components/ui/main"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/shared/footer"
import Section from "@/components/ui/section"

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Section>
          <div className="container flex flex-col md:flex-row gap-8 items-center max-w-5xl">
            <div className="h-52 w-52 rounded-full bg-muted border-border border">
              <div className="relative h-40 w-40 mx-auto my-auto">
                <Image src="/memoji.png" fill />
              </div>
            </div>
            <div>
              <span className="px-3 py-1 rounded-2xl bg-muted text-muted-foreground text-sm border border-border">Open to Internship Opportunities</span>
              <h1 className="mt-2 text-6xl font-bold">Hi! I am Sumiet Gore</h1>
              <p className="mt-6 text-muted-foreground">Embedded Systems Engineering student at University of Turku and Technisxhe Universtat Berlin.</p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="container flex flex-col gap-8 items-center max-w-5xl">
            <h1 className="text-4xl font-bold text-center">Innovation Architect: Building the foundations of tomorrow</h1>
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
            <div className="bg-muted rounded-md py-12 px-4 flex flex-col gap-4 border border-border">
              <h1 className="text-center">Lets chat</h1>
              <Button asChild variant="link" className="text-4xl text-center"><Link href="mailto:hello@sumietgore.com">hello@sumietgore.com</Link></Button>
            </div>
          </div>
        </Section>
      </Main>
      <Footer />
    </>
  )
}
