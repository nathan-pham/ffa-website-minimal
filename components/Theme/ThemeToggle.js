import { MoonOutline, SunnyOutline } from "react-ionicons";

import themeContext from "./themeContext";
import { useContext, useRef } from "react";

import gsap from "gsap";

const ThemeToggle = () => {
    const [dark, setDark] = useContext(themeContext);
    const toggleRef = useRef(null);

    const onClick = () => {
        setDark(!dark);

        gsap.fromTo(
            toggleRef.current,
            {
                rotate: 0,
            },
            {
                rotate: dark ? 360 : -360,
                duration: 1,
            }
        );
    };

    return (
        <div className="fixed bottom-6 right-6 md:right-16 ">
            <button
                className="border outline-none grid place-items-center h-10 w-10 bg-white border rounded-full cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all"
                onClick={onClick}
            >
                <div ref={toggleRef}>
                    {dark ? <MoonOutline /> : <SunnyOutline />}
                </div>
            </button>
        </div>
    );
};

export default ThemeToggle;
