import Section from "@components/Section"
import TextGradient from "@components/TextGradient"
import { PrimaryButton } from "@components/Atoms/Button"

function Step({ number, circleGradient="from-blue-500 to-green-300", lineGradient="from-blue-500" }) {

    return (

        <div className="flex flex-col items-center">
            <div className={ [ "h-24 w-px bg-gradient-to-t", lineGradient ].join(' ') }></div>
            <div className={ [ "rounded-full w-10 h-10 flex items-center justify-center font-semibold text-white bg-gradient-to-r", circleGradient ].join(' ') }>
                { number }
            </div>
        </div>
        

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

                <div className="flex mt-16">
                    <img src="illustrations/learning.svg" className="w-5/12" />

                    <div>
                        <h2 className="text-3xl font-bold">Classroom</h2>
                        <p className="text-gray-500 mt-2">Question-based instruction and learning with amazing classes and labs that you can earn college credit for. Check the Del Oro course catalog.</p>

                        <h2 className="text-3xl font-bold mt-10">Projects</h2>
                        <p className="text-gray-500 mt-2">Experiential, service, and work-based learning with a Superviced Agricultural Experience program. Earn money by working with animal or plant systems.</p>

                        <h2 className="text-3xl font-bold mt-10">Organization</h2>
                        <p className="text-gray-500 mt-2">Gain leadership, personal, and career skills through engagement in a national organization, FFA. Participate in competitions, join leadership conferences, and </p>
                    </div>
                </div>
            </Section>

            <Section className="mt-10">
                <div className="text-center">
                    <Step number={ 2 } circleGradient="from-orange-500 to-yellow-300" lineGradient="from-orange-500" />
                    
                    <h2 className="my-6 text-5xl font-bold">Build with our <TextGradient gradient="from-orange-500 to-yellow-300">awesome team.</TextGradient></h2>
                    <p className="text-gray-500 mt-2 max-w-2xl text-xl mx-auto">Doing stuff alone is lame. Collaborate with your peers and our officers to make events happen, participate in national competitions, and have fun!</p>
                </div>

            </Section>

            <Section className="my-20">
                <div className="w-full text-center">
                    <h2 className="text-5xl font-bold">Trusted by <TextGradient>local businesses.</TextGradient></h2>
                    <p className="mt-6 mb-8 text-gray-500 text-xl">You're in good hands. <b>Promise</b>.</p>
                    <PrimaryButton>Sponsor Us</PrimaryButton>
                </div>
            </Section>

        </>
    )

}