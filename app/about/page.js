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
                            {"I am an electrical engineering enthusiast currently pursuing a Masters in Embedded Systems at TU Berlin and the University of Turku. My fascination with electronics began early and has driven me to explore innovative solutions in this field."}
                        </p>
                        <p className="mb-4">
                            {"My academic journey at TU Berlin and the University of Turku has exposed me to cutting-edge research and brilliant minds, refining my technical expertise and passion. I am committed to creating technology that serves a purpose, enhances efficiency, and promotes sustainability and inclusivity."}
                        </p>
                        <p className="mb-4">
                            {"With a focus on embedded systems, I'm passionate about designing intelligent devices that can revolutionize industries like healthcare and transportation. I thrive in collaborative, interdisciplinary environments where diverse perspectives lead to innovative solutions."}
                        </p>
                        <p className="mb-4">
                            {"Exploring my portfolio reveals my dedication to learning, attention to detail, and problem-solving. My goal is a future where technology coexists harmoniously with humanity, leaving a positive impact on the world. Let's connect and explore opportunities for meaningful collaboration."}
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
                                <TimelineTitle>Process Design Engineer <span className="text-base font-normal">(Subhadra Agro, India - Family Business)</span></TimelineTitle>
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
