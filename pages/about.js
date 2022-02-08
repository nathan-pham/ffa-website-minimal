import Root from "@components/Root";
import TextGradient from "@components/TextGradient";
import Section from "@components/Sections/Section";
import Footer from "@components/Atoms/Footer";

import GenericTitle from "@components/Sections/GenericTitle";
import FlagScene from "@components/Scenes/FlagScene";

export default function About() {
    return (
        <Root title="About">
            <Section>
                <GenericTitle
                    title={
                        <>
                            <TextGradient>All about</TextGradient> our team
                        </>
                    }
                    description="Meet our fantastic team!"
                />
                <FlagScene />
            </Section>
            <Footer />
        </Root>
    );
}
