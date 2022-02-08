import Root from "@components/Root";
import TextGradient from "@components/TextGradient";
import Section from "@components/Sections/Section";
import Footer from "@components/Atoms/Footer";

import GenericTitle from "@components/Sections/GenericTitle";
import FlagScene from "@components/Scenes/FlagScene";
import ProfileCard from "@components/Profile/ProfileCard";
import AddProfile from "@components/Profile/AddProfile";

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
                <div className="grid grid-cols-4 gap-6 mt-6">
                    <ProfileCard src="https://nathanpham.me/icons/apple-icon.png" name="Nathan Pham" position="Historian" email="nathanpham.me@gmail.com"/>
                    <ProfileCard src="https://nathanpham.me/icons/apple-icon.png" name="Nathan Pham" position="Historian" email="nathanpham.me@gmail.com"/>
                    <ProfileCard src="https://nathanpham.me/icons/apple-icon.png" name="Nathan Pham" position="Historian" email="nathanpham.me@gmail.com"/>
                    <ProfileCard src="https://nathanpham.me/icons/apple-icon.png" name="Nathan Pham" position="Historian" email="nathanpham.me@gmail.com"/>
                    <ProfileCard src="https://nathanpham.me/icons/apple-icon.png" name="Nathan Pham" position="Historian" email="nathanpham.me@gmail.com"/>
                    <ProfileCard src="https://nathanpham.me/icons/apple-icon.png" name="Nathan Pham" position="Historian" email="nathanpham.me@gmail.com"/>
                    <ProfileCard src="https://nathanpham.me/icons/apple-icon.png" name="Nathan Pham" position="Historian" email="nathanpham.me@gmail.com"/>

                    <AddProfile />
                </div>
            </Section>
            <Footer />
        </Root>
    );
}
