import Root from "@components/Root";
import TextGradient from "@components/TextGradient";

import GenericTitle from "@components/Sections/GenericTitle";
import GalleryScene from "@components/Scenes/GalleryScene";
import BackHome from "@components/BackHome";

import Section from "@components/Sections/Section";
import Footer from "@components/Atoms/Footer";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

import list from "@components/Events/list";

export default function Gallery() {
    const gridRef = useRef(null);

    useEffect(() => {
        const elements = gridRef.current.querySelectorAll(".js-tilt");
        VanillaTilt.init(elements, {
            glare: true,
            max: 10,
        });

        return () => {
            [...elements].forEach((element) => {
                element.vanillaTilt.destroy();
            });
        };
    }, []);

    return (
        <Root title="Gallery">
            <Section>
                <div className="text-center my-10 mx-auto max-w-5xl">
                    <GenericTitle
                        title={
                            <>
                                <TextGradient>Scroll through</TextGradient> our
                                events
                            </>
                        }
                        description="A list of all of our amazing opportunities, competitions, and fundraisers!"
                    />
                    <p className="text-gray-500 text-xl">
                        Visit the{" "}
                        <a
                            className="underline"
                            href="https://docs.google.com/document/d/1tL-KybfR5-eJZJMAh5FNAyQ1bgXbcXFxUVfw0Uowi-I/edit"
                        >
                            Calendar
                        </a>{" "}
                        for more accurate dates and events.
                    </p>

                    <div className="grid grid-cols-3 gap-6 mt-8" ref={gridRef}>
                        {list.map((event) => (
                            <div
                                className={`js-tilt bg-gray-100 rounded-lg p-6 relative flex flex-col justify-between text-white ${event.color}`}
                            >
                                <h1 className="text-2xl font-semibold leading-tight">
                                    {event.name}
                                </h1>
                                <p className="mt-2 text-lg text-gray-100">
                                    {event.date.replace("0", "?")}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
            <Footer />
            {/* <BackHome />
            <GalleryScene /> */}
            {/* <div className="fixed top-0 left-0 z-10 text-center w-screen h-screen flex flex-col items-center justify-center">
                <GenericTitle
                    title={
                        <>
                            <TextGradient>Scroll</TextGradient> our memories
                        </>
                    }
                    description="An infinite gallery of experiences."
                    margin=""
                />
            </div> */}
        </Root>
    );
}
