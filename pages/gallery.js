import Root from "@components/Root";
import TextGradient from "@components/TextGradient";

import GenericTitle from "@components/Sections/GenericTitle";
import GalleryScene from "@components/Scenes/GalleryScene";
import BackHome from "@components/BackHome";

export default function Gallery() {
    return (
        <Root title="Gallery" header={false}>
            <BackHome />
            <GalleryScene />
            <div className="fixed top-0 left-0 z-10 text-center w-screen h-screen flex flex-col items-center justify-center">
                <GenericTitle
                    title={
                        <>
                            <TextGradient>Scroll</TextGradient> our memories
                        </>
                    }
                    description="An infinite gallery of experiences."
                    margin=""
                />
            </div>
        </Root>
    );
}
