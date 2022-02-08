import Root from "@components/Root";
import TextGradient from "@components/TextGradient";
import Section from "@components/Sections/Section";
import Footer from "@components/Atoms/Footer";

import GenericTitle from "@components/Sections/GenericTitle";

export default function Tour() {
    return (
        <Root title="Tour">
            <Section>
                <GenericTitle
                    title={
                        <>
                            <TextGradient>Explore</TextGradient> our farm
                        </>
                    }
                    description="Check out the school farm!"
                />
            </Section>
            <Footer />
        </Root>
    );
}