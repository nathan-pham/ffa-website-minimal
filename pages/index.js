import Section from "@components/Sections/Section"
import LearningSection from "@components/Sections/LearningSection"
import ImageSection from "@components/Sections/ImageSection"
import Step from "@components/Step"

import TextGradient from "@components/TextGradient"
import { PrimaryButton } from "@components/Atoms/Button"
import Input from "@components/Atoms/Input"
import Textarea from "@components/Atoms/Textarea"
import Footer from "@components/Atoms/Footer"

export default function Home() {
    
    return (
        <>
            <Section className="h-screen flex items-center">
                <div>
                    <h1 className="text-6xl font-extrabold leading-tight">
                        <TextGradient>Start building</TextGradient> the future of agriculture.
                    </h1>
                    <p className="mt-6 mb-8 text-gray-500 text-xl">Del Oro FFA is a youth organization that provides the best learning experience with an obsessive focus on leadership and career skills.</p>
                    <PrimaryButton>Start Learning</PrimaryButton>
                </div>

                <img src="illustrations/chicken.svg" className="w-5/12" />
            </Section>

            <Section>
                <div className="text-center">
                    <p className="uppercase font-mono text-sm font-semibold tracking-widest mb-8">Explore the Del Oro FFA Way</p>
                    
                    <Step number={ 1 } />
                    
                    <h2 className="my-6 text-5xl font-bold">Learn by <TextGradient gradient="from-blue-500 to-green-300">doing stuff.</TextGradient></h2>
                    <p className="text-gray-500 text-xl">Agricultural education includes 3 components.</p>
                </div>

                <div className="mt-16">
                    <LearningSection />
                </div>
            </Section>

            <Section className="mt-10">
                <div className="text-center">
                    <Step number={ 2 } circleGradient="from-orange-500 to-yellow-300" lineGradient="from-orange-500" />
                    
                    <h2 className="my-6 text-5xl font-bold">Build with our <TextGradient gradient="from-orange-500 to-yellow-300">awesome team.</TextGradient></h2>
                    <p className="text-gray-500 max-w-2xl text-xl mx-auto">Doing stuff alone is lame. Collaborate with your peers and our officers to make events happen, participate in national competitions, and have fun!</p>
                </div>

                <div className="mt-16">
                    <ImageSection />
                </div>
            </Section>

            <Section className="mt-10">
                <div className="text-center">
                    <Step number={ 3 } circleGradient="from-purple-500 to-pink-400" lineGradient="from-purple-500" />

                    <h2 className="my-6 text-5xl font-bold">Trusted by <TextGradient gradient="from-purple-500 to-pink-400">local businesses.</TextGradient></h2>
                    <p className="text-gray-500 text-xl mb-8">You're in good hands. Promise.</p>
                    <PrimaryButton>Sponsor Us</PrimaryButton>
                </div>
            </Section>

            <Section className="mt-24">
                <div className="text-center">
                    <p className="uppercase font-mono text-sm font-semibold tracking-widest mb-8">Begin your FFA journey</p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-3xl font-bold">Ready to do something epic?</h2>
                        
                        <form className="rounded-lg shadow-xl p-6 flex flex-col mx-auto mt-6">
                            <Input forLabel="First & Last Name" name="name" placeholder="Jane Doe "/>

                            <Input forLabel="School Email" name="email" placeholder="janedoe@puhsd.k12.ca.us" className="mt-6"/>

                            <Textarea forLabel="Additional Details" name="details" placeholder="Tell us about yourself and why you're interested!" className="mt-6" />

                            <div className="mt-6 text-right">
                                <PrimaryButton>Send</PrimaryButton>
                            </div>
                        </form>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold">Connect with us.</h2>
                        <div className="border bg-gray-50 p-6 mt-6 rounded-lg">
                            <p className="text-lg">Get important reminders and announcements for workdays, competitions, and events.</p>
                        
                            <div className="flex gap-4 mt-6">
                                <img src="icons/instagram.png" className="w-16 rounded-lg" />
                                <img src="icons/remind.png" className="w-16 rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>

            </Section>

            <Footer />
        </>
    )

}