import { Header } from "@/components/shared/header"
import Main from "@/components/ui/main"
import Footer from "@/components/shared/footer"
import Section from "@/components/ui/section"

export const metadata = {
    title: "About | Sumiet Gore",
    description: "Tech nerd at work!"
}

export default function Home() {
    return (
        <>
            <Header />
            <Main>
                <Section className="md:mt-0">
                    <div className="container max-w-5xl">
                        <h1 className="text-4xl font-bold mb-8">About</h1>
                        <p className="mb-4">
                            Welcome to my personal website! I am thrilled to have the opportunity to share my journey as an electrical engineer and my passion for developing meaningful technologies that positively impact mankind. Currently, I am pursuing my Masters in Embedded Systems at TU Berlin and the University of Turku.
                        </p>
                        <p className="mb-4">
                            From an early age, I have been fascinated by the intricate workings of electronics and their ability to shape the world around us. This curiosity led me to pursue a career in electrical engineering, where I have gained invaluable knowledge and skills in designing innovative solutions.
                        </p>
                        <p className="mb-4">
                            My academic journey has been enriched by my time at both TU Berlin and the University of Turku, where I have been exposed to cutting-edge research and collaborated with brilliant minds in the field. These experiences have honed my technical expertise and fueled my desire to make a significant contribution to society.
                        </p>
                        <p className="mb-4">
                            What truly drives me is the opportunity to create technologies that serve a greater purpose. I firmly believe that technology should be harnessed to improve the lives of individuals and address pressing global challenges. Through my work, I aspire to develop solutions that not only enhance efficiency but also promote sustainability, accessibility, and inclusivity.
                        </p>
                        <p className="mb-4">
                            I am particularly passionate about embedded systems, a field that lies at the intersection of hardware and software. The ability to design intelligent and interconnected devices has the potential to revolutionize various industries, from healthcare to transportation, and beyond. By leveraging my knowledge in this field, I aim to develop practical, reliable, and user-friendly technologies that empower individuals and drive progress.
                        </p>
                        <p className="mb-4">
                            Beyond my technical endeavors, I am a firm believer in the power of collaboration and interdisciplinary approaches. I thrive in team environments where diverse perspectives converge to create innovative solutions. I enjoy engaging with others, learning from their experiences, and collectively pushing the boundaries of what is possible.
                        </p>
                        <p className="mb-4">
                            I invite you to explore my portfolio and discover the projects I have undertaken. Each endeavor represents my dedication to continuous learning, meticulous attention to detail, and a genuine passion for problem-solving. Together, let us forge a path towards a future where technology harmoniously coexists with humanity, making a profound and positive impact on our world.
                        </p>
                        <p className="mb-4">
                            Thank you for visiting my website, and I look forward to connecting with you and exploring opportunities to collaborate on meaningful projects.
                        </p>
                    </div>
                </Section>
            </Main>
            <Footer />
        </>
    )
}
