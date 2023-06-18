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
                    <div className="container max-w-5xl">
                        <h1 className="text-4xl font-bold">Projects</h1>
                    </div>
                </Section>
            </Main>
            <Footer />
        </>
    )
}
