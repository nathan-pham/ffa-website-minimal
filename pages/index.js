import Section from "@components/Sections/Section";
import LearningSection from "@components/Sections/LearningSection";
import ImageSection from "@components/Sections/ImageSection";
import Step from "@components/Step";

import TextGradient from "@components/TextGradient";
import { PrimaryButton, SecondaryButton } from "@components/Atoms/Button";
import Footer from "@components/Atoms/Footer";

import Root from "@components/Root";
import RegisterForm from "@components/Atoms/Form/RegisterForm";

import Link from "next/link";

import EmojiScene from "@components/Scenes/EmojiScene";

export default function Home() {
    return (
        <Root>
            <Section className="grid items-center text-center w-full py-36 relative">
                <EmojiScene />
                <div className="pointer-events-none">
                    <h1 className="text-7xl font-extrabold leading-tight">
                        Agriculture <TextGradient>Reimagined</TextGradient>
                    </h1>
                    <p className="mt-6 mb-8 text-gray-500 text-xl max-w-2xl mx-auto">
                        Del Oro FFA is a youth organization that provides the
                        best learning experience with an obsessive focus on
                        leadership and career skills.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="text-center">
                    <p className="uppercase font-mono text-sm font-semibold tracking-widest my-8">
                        Explore the Del Oro FFA Way
                    </p>

                    <Step number={1} />

                    <h2 className="my-6 text-5xl font-bold">
                        Learn by{" "}
                        <TextGradient gradient="from-blue-500 to-green-300">
                            doing stuff.
                        </TextGradient>
                    </h2>
                    <p className="text-gray-500 text-xl">
                        Agricultural education includes 3 components.
                    </p>
                </div>

                <div className="mt-16">
                    <LearningSection />
                </div>

                <div className="w-fit mx-auto mt-10">
                    <Link href="/posts">
                        <a>
                            <PrimaryButton>Learn More</PrimaryButton>
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

                    <h2 className="my-6 text-5xl font-bold">
                        Work with our{" "}
                        <TextGradient gradient="from-orange-500 to-yellow-300">
                            awesome team.
                        </TextGradient>
                    </h2>
                    <p className="text-gray-500 max-w-2xl text-xl mx-auto">
                        Doing stuff alone is lame. Collaborate with your peers
                        and our officers to make events happen, participate in
                        national competitions, and have fun!
                    </p>
                </div>

                <div className="mt-16">
                    <ImageSection />
                </div>

                <div className="flex gap-6 w-full justify-center items-center mt-10">
                    <Link href="/about">
                        <a>
                            <PrimaryButton>Officers</PrimaryButton>
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

                    <h2 className="my-6 text-5xl font-bold">
                        Trusted by{" "}
                        <TextGradient gradient="from-purple-500 to-pink-400">
                            amazing businesses.
                        </TextGradient>
                    </h2>
                    <p className="text-gray-500 text-xl">
                        You're in good hands. Promise.
                    </p>

                    <div className="flex justify-center mt-10">
                        <PrimaryButton>Sponsor Us</PrimaryButton>
                    </div>
                </div>
            </Section>

            {/* <Section className="mt-20">
                <div className="text-center">
                    <p className="uppercase font-mono text-sm font-semibold tracking-widest my-4">
                        Begin your FFA journey
                    </p>
                </div>
            </Section>
            <RegisterForm variant="footer" />
            */}
            <Footer />
        </Root>
    );
}
