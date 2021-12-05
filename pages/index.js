import Section from "@components/Sections/Section"
import LearningSection from "@components/Sections/LearningSection"
import ImageSection from "@components/Sections/ImageSection"
import Step from "@components/Step"

import TextGradient from "@components/TextGradient"
import { PrimaryButton } from "@components/Atoms/Button"

function Footer() {

    return (

        <footer className="py-6">

        </footer>

    )

}

function Input({ forLabel, className, name, ...props }) {

    return (

        <>
            {

                forLabel 
                    ? <label for="name" className={ [ "capitalize font-bold text-md", className ].join(' ') }>{ forLabel }</label>
                    : <></>

            }

            <input className="border px-4 py-2 mt-2 rounded-md outline-none" name={ name } id={ name } {...props} />
        </>
    )

}

function Textarea({ forLabel, className, name, ...props }) {

    return (
        
        <>
            {
                
                forLabel 
                    ? <label for="name" className={ [ "capitalize font-bold text-md", className ].join(' ') }>{ forLabel }</label>
                    : <></>
                
            }

            <textarea className="border px-4 py-2 mt-2 rounded-md resize-y h-52 outline-none" name={ name } { ...props }></textarea>
        </>
    
    )

}



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
                
                <form className="rounded-lg shadow-lg p-6 flex flex-col max-w-2xl mx-auto">
                    <Input forLabel="First & Last Name" name="name" placeholder="Jane Doe "/>

                    <Input forLabel="School Email" name="email" placeholder="janedoe@puhsd.k12.ca.us" className="mt-6"/>

                    <Textarea forLabel="Additional Details" name="details" placeholder="Tell us about yourself and why you're interested!" className="mt-6" />

                    <div className="mt-6 text-right">
                        <PrimaryButton>Send</PrimaryButton>
                    </div>
                </form>
            </Section>

            <Footer />
        </>
    )

}