import Section from "components/Sections/Section";
import LearningSection from "components/Sections/LearningSection";
import ImageSection from "components/Sections/ImageSection";
import Step from "components/Step";

import TextGradient from "components/TextGradient";
import Button from "components/Atoms/Button";
import Footer from "components/Atoms/Footer";
import P from "components/Atoms/P";
import H2 from "components/Atoms/H2";

import Root from "components/Root";

import Link from "next/link";

import dynamic from "next/dynamic";

const EmojiScene = dynamic(import("components/Scenes/EmojiScene"));

export default function Home() {
    return (
        <Root margin={false}>
            <div className="grid items-center text-center w-full relative">
                <EmojiScene />
                <div className="pointer-events-none py-36">
                    <Section>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight dark:text-white">
                            Agriculture <TextGradient>Reimagined</TextGradient>
                        </h1>
                        <P className="mt-6 mb-8 md:text-xl max-w-2xl mx-auto">
                            Del Oro FFA is a youth organization that provides
                            the best learning experience with an obsessive focus
                            on leadership and career skills.
                        </P>
                    </Section>
                </div>
            </div>

            <Section>
                <div className="text-center">
                    <p className="uppercase font-mono text-sm font-semibold tracking-widest my-8 dark:text-white">
                        Explore the Del Oro FFA Way
                    </p>

                    <Step number={1} />

                    <H2 className="my-6">
                        Learn by{" "}
                        <TextGradient gradient="from-blue-500 to-green-300">
                            doing stuff.
                        </TextGradient>
                    </H2>
                    <P>Agricultural education includes 3 components.</P>
                </div>

                <div className="mt-16">
                    <LearningSection />
                </div>

                <div className="w-fit mx-auto mt-10">
                    <Link href="/posts">
                        <a>
                            <Button>Learn More</Button>
                        </a>
                    </Link>
                </div>
            </Section>

            <Section className="mt-10">
                <div className="text-center">
                    <Step
                        number={2}
                        circleGradient="from-orange-500 to-yellow-300"
                        lineGradient="from-orange-500"
                    />

                    <H2 className="my-6">
                        Work with our{" "}
                        <TextGradient gradient="from-orange-500 to-yellow-300">
                            awesome team.
                        </TextGradient>
                    </H2>
                    <P className="max-w-2xl mx-auto">
                        Doing stuff alone is lame. Collaborate with your peers
                        and our officers to make events happen, participate in
                        national competitions, and have fun!
                    </P>
                </div>

                <div className="mt-16">
                    <ImageSection />
                </div>

                <div className="flex gap-6 w-full justify-center items-center mt-10">
                    <Link href="/about">
                        <a>
                            <Button>Officers</Button>
                        </a>
                    </Link>
                </div>
            </Section>

            <Section className="mt-10">
                <div className="text-center">
                    <Step
                        number={3}
                        circleGradient="from-purple-500 to-pink-400"
                        lineGradient="from-purple-500"
                    />

                    <H2 className="my-6">
                        Trusted by{" "}
                        <TextGradient gradient="from-purple-500 to-pink-400">
                            amazing businesses.
                        </TextGradient>
                    </H2>
                    <P>You're in good hands. Promise.</P>

                    <div className="flex justify-center mt-10">
                        <a href="/sponsors.pdf">
                            <Button>Sponsor Us</Button>
                        </a>
                    </div>
                </div>
            </Section>
            <Footer />
        </Root>
    );
}
