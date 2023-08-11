import { Header } from "@/components/shared/header"
import Main from "@/components/ui/main"
import Footer from "@/components/shared/footer"
import Section from "@/components/ui/section"
import { TimelineContainer, TimelineItem, TimelineTitle, TimelineTime, TimelineContent } from "@/components/ui/timeline"

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
                <Section className="py-6 m-0 md:mt-0 md:py-6">
                    <div className="container max-w-5xl">
                        <h1 className="text-3xl font-bold mb-8">Work Experience</h1>
                        <TimelineContainer>
                            <TimelineItem>
                                <TimelineTitle>Research Assistant <span className="text-base font-normal">(University of Turku, Finland)</span></TimelineTitle>
                                <TimelineTime>June 2022 - August 2022</TimelineTime>
                                <TimelineContent>
                                    <ul className="space-y-1">
                                        <li>Conducted research on Ultra-Wideband (UWB) and Motion Capture systems, resulting in a 30% improvement in precise drone localization accuracy.</li>
                                        <li>Integrated AI and ML technologies into drones, leading to a significant enhancement in autonomy and decision-making capabilities, with a 40% improvement
                                            in object detection accuracy, a 35% increase in navigation efficiency, and a 50% boost in obstacle avoidance effectiveness.</li>
                                    </ul>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineTitle>Product Development Manager <span className="text-base font-normal">(DGZ Machines, India)</span></TimelineTitle>
                                <TimelineTime>July 2019 - May 2021</TimelineTime>
                                <TimelineContent>
                                    <ul className="space-y-1">
                                        <li>Successfully simulated, tested, and designed digital circuits for smart vending machines and incinerators, resulting in a 25% improvement in system efficiency
                                            and performance.</li>
                                        <li>Prototyped and implemented the designed circuits, leading to a 30% reduction in product costs making it one of the cheapest products in India.
                                            Acquired hands-on experience in designing and producing customized embedded systems, and resulted in a 200% increase in revenue.</li>
                                    </ul>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineTitle>Founder and Partner <span className="text-base font-normal">(Subhadra Agro, India - Family Business)</span></TimelineTitle>
                                <TimelineTime>July 2019 - May 2021</TimelineTime>
                                <TimelineContent>
                                    <ul className="space-y-1">
                                        <li>Developed a manufacturing process for Jaggery (Raw Sugar) that reduced human intervention by 90%, resulting in improved product cleanliness and hygiene.</li>
                                        <li>Led machinery selection and procurement efforts, resulting in 20% savings in capital investment.</li>
                                        <li>Ensured that the manufacturing process met stringent quality standards and hygiene standards.</li>
                                    </ul>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineTitle>Research Intern <span className="text-base font-normal">(University of Arkansas at Little Rock, USA)</span></TimelineTitle>
                                <TimelineTime>July 2019 - May 2021</TimelineTime>
                                <TimelineContent>
                                    <ul className="space-y-1">
                                        <li>Conceptualized and developed a Driver Drowsiness Detection System.</li>
                                        <li>Utilized Raspberry Pi as the core platform, enabling real-time processing and achieving a 30% improvement in system responsiveness.</li>
                                        <li>Integrated camera and accelerometers, combined with OpenCV and custom algorithms, resulting in a 55% accuracy in detecting driver drowsiness and driving
                                            patterns.</li>
                                    </ul>
                                </TimelineContent>
                            </TimelineItem>
                        </TimelineContainer>
                    </div>
                </Section>
                <Section className="py-6 m-0 md:mt-0 md:py-6">
                    <div className="container max-w-5xl">
                        <h1 className="text-3xl font-bold mb-8">Education</h1>
                        <TimelineContainer>
                            <TimelineItem>
                                <TimelineTitle>Dual Degree MSc in Embedded Systems <span className="text-base font-normal">(University of Turku, Finland and Technical University of Berlin, Germany)</span></TimelineTitle>
                                <TimelineTime>August 2021 - Pursuing</TimelineTime>
                                <TimelineContent>
                                    <ul className="space-y-1">
                                        <li>Learning / finished courses in Hardware Desingn Languages(VHDL), Perception and Navigation in Robotics, Hardware Acceleration for Robotics and AI,
                                            Autonomous Systems Architecture and Energy Efficient Embedded Systems.</li>
                                        <li>Worked on LIDAR, Drones, Robots and technologies like Robot Operating Systems, OpenCV, Jetson Vision.</li>
                                    </ul>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineTitle>Bachelors of Engineering in Electrical Engineering <span className="text-base font-normal">(Savitribai Phule Pune University, India)</span></TimelineTitle>
                                <TimelineTime>August 2014 - May 2018</TimelineTime>
                                <TimelineContent>
                                    <ul className="space-y-1">
                                        <li>Finished courses in Fundamentals of Microcontrollers and Microprocessor, Advanced Microcontroller, Architecture Analog and Digital Electronics, Control
                                            Systems and Fundamentals of Programming Languages.</li>
                                    </ul>
                                </TimelineContent>
                            </TimelineItem>
                        </TimelineContainer>
                    </div>
                </Section>
            </Main>
            <Footer />
        </>
    )
}
