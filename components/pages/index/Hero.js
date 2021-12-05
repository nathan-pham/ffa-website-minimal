import PrimaryButton from "@components/Button/PrimaryButton"
import TextGradient from "@components/TextGradient"

export default function Hero() {

    return (

        <div className="w-full h-screen flex items-center">
            <div>
                <h1 className="text-6xl font-extrabold leading-tight">
                    <TextGradient>Start building</TextGradient> the future of agriculture.
                </h1>
                <p className="my-8 text-gray-500 text-xl">Del Oro FFA is a youth organization that provides the best learning experience with an obsessive focus on leadership and career skills.</p>
                <PrimaryButton>Start Learning</PrimaryButton>
            </div>

            <img src="illustrations/chicken.svg" />
        </div>

    )

}