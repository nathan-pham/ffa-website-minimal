import Root from "@components/Root";
import TextGradient from "@components/TextGradient";
import Section from "@components/Sections/Section";
import Footer from "@components/Atoms/Footer";

import GenericTitle from "@components/Sections/GenericTitle";
import FlagScene from "@components/Scenes/FlagScene";
import ProfileCard from "@components/Profile/ProfileCard";
import AddProfile from "@components/Profile/AddProfile";

const profiles = [
    {
        src: "dvorak.jpg",
        email: "rdvorak@puhsd.k12.ca.us",
        name: "Mrs. Dvorak",
        position: "FFA Advisor / CTE Agriscience Program"
    },
    {
        src: "belli.jpg",
        email: "sbelli@puhsd.k12.ca.us",
        name: "Mrs. Belli",
        position: "FFA Advisor / CTE Agriculture Chemistry"
    },
    {
        src: "pahl.jpg",
        email: "mpahl@puhsd.k12.ca.us",
        name: "Mr. Pahl",
        position: "FFA Advisor / CTE Welding Technology"
    },
    {
        src: "ella.webp",
        email: "nistore22@puhsd.k12.ca.us",
        name: "Ella Nistor",
        position: "President",
    },
    {
        src: "esther.jpg",
        email: "jollye23@puhsd.k12.ca.us",
        name: "Esther Jolly",
        position: "Vice President",
    },
    {
        src: "austin.webp",
        email: "wuerthnera24@puhsd.k12.ca.us",
        name: "Austin Wuerthner",
        position: "Secretary",
    },
    {
        src: "kiana.jpg",
        email: "mushockbuntink22@puhsd.k12.ca.us",
        name: "Kiana Mushock-Buntin",
        position: "Treasurer",
    },
    {
        src: "maddie.png",
        email: "floresm23@puhsd.k12.ca.us",
        position: "Sentinel",
        name: "Maddie Flores"
    },
    {
        src: "emmie.png",
        email: "gottliebe24@puhsd.k12.ca.us",
        position: "Reporter",
        name: "Emmie Gottlieb",
    },
    {
        src: "nathan.png",
        email: "phamn23@puhsd.k12.ca.us",
        name: "Nathan Pham",
        position: "Historian",
    },
];

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
                <div className="grid grid-cols-3 auto-rows-fr gap-6 mt-6">
                    {profiles.map((profile, i) => (
                        <ProfileCard key={i} {...profile} />
                    ))}

                    <AddProfile />
                </div>
            </Section>
            <Footer />
        </Root>
    );
}
