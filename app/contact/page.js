import { Header } from "@/components/shared/header"
import Main from "@/components/ui/main"
import Footer from "@/components/shared/footer"
import Section from "@/components/ui/section"

export const metadata = {
    title: "Contact | Sumiet Gore",
    description: "Tech nerd at work!"
}

export default function Home() {
    return (
        <>
            <Header />
            <Main>
                <Section className="md:mt-0">
                    <div className="container max-w-5xl">
                        <h1 className="text-4xl font-bold">Contact</h1>
                    </div>
                </Section>
            </Main>
            <Footer />
        </>
    )
}
