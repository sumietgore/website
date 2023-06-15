import { Header } from "@/components/shared/header"
import { Button } from "@/components/ui/button"
import Main from "@/components/ui/main"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/shared/footer"

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <section className="mt-6 py-6 md:mt-12 md:py-14">
          <div className="container flex flex-col md:flex-row md:gap-16 gap-8 items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold">Innovation Architect: Building the foundations of tomorrow</h1>
              <p className="text-muted-foreground mt-4 max-w-lg">
                Welcome to my digital domain! As an Innovation Architect, I build tomorrow's foundations. With a passion for technology and expertise in embedded systems engineering, I create meaningful solutions that drive progress. Join me on this exciting journey as we push boundaries, pioneer advancements, and shape a limitless future. Together, let's build a better world through innovation.
              </p>
              <div className="flex gap-2 mt-6">
                <Button asChild><Link href="/projects">My Work</Link></Button>
                <Button asChild variant="outline"><Link href="/about">About Me</Link></Button>
              </div>
            </div>
            <div className="relative md:w-1/2 w-full -order-1 md:order-1 h-40 md:h-96">
              <Image src="/innovation.jpg" fill alt="innovation" className="object-cover rounded-lg" />
            </div>
          </div>
        </section>
        <section className="mt-12 py-14">
          <div className="container">
            <h1 className="text-4xl font-bold">Projects</h1>
            <div className="mt-8 flex flex-wrap gap-8">
              <div className="w-1/2 h-80 rounded-lg border border-border hover:bg-accent"></div>
              <div className="w-1/2 h-80 rounded-lg border border-border hover:bg-accent"></div>
              <div className="w-1/2 h-80 rounded-lg border border-border hover:bg-accent"></div>
              <div className="w-1/2 h-80 rounded-lg border border-border hover:bg-accent"></div>
            </div>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  )
}
