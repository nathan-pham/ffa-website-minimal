import Root from "@components/Root";
import TextGradient from "@components/TextGradient";
import Section from "@components/Sections/Section";
import Footer from "@components/Atoms/Footer";

import GenericTitle from "@components/Sections/GenericTitle";

export default function Gallery() {
    return (
        <Root title="Gallery">
            <Section>
                <GenericTitle
                    title={
                        <>
                            <TextGradient>See all</TextGradient> our memories
                        </>
                    }
                    description="Scroll through an infinite gallery of experiences."
                />
            </Section>
            <Footer />
        </Root>
    );
}
