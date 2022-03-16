import Root from "components/Root";
import TextGradient from "components/TextGradient";

import GenericTitle from "components/Sections/GenericTitle";

import Section from "components/Sections/Section";
import Footer from "components/Atoms/Footer";

import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

import list from "components/Events/list";

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
                <div className="text-center mt-10 mx-auto max-w-5xl">
                    <GenericTitle
                        title={
                            <>
                                <TextGradient>Scroll through</TextGradient> our
                                events
                            </>
                        }
                        description="A list of all of our amazing opportunities, competitions, and fundraisers! Visit the Calendar for more events."
                    />

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 auto-rows-fr"
                        ref={gridRef}
                    >
                        {list.map((event, i) => (
                            <div
                                className={`js-tilt bg-gray-100 rounded-lg p-6 relative flex flex-col justify-between text-white ${event.color}`}
                                key={`gallery-${i}`}
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
        </Root>
    );
}
