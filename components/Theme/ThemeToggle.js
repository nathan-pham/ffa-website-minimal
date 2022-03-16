import { MoonOutline, SunnyOutline } from "react-ionicons";

import themeContext from "./themeContext";
import { useContext, useRef } from "react";

import gsap from "gsap";

const ThemeToggle = () => {
    const [dark, setDark] = useContext(themeContext);
    const toggleRef = useRef(null);

    const onClick = () => {
        setDark((dark) => {
            localStorage.theme = dark ? "light" : "dark";
            return !dark;
        });

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
        <div className="fixed bottom-6 right-6">
            <button
                className="border outline-none grid place-items-center h-12 w-12 bg-white rounded-full cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all dark:bg-gray-900 dark:text-white dark:border-gray-800 dark:shadow-gray-900"
                onClick={onClick}
            >
                <div ref={toggleRef}>
                    {dark ? (
                        <MoonOutline color="fillColor" />
                    ) : (
                        <SunnyOutline color="fillColor" />
                    )}
                </div>
            </button>
        </div>
    );
};

export default ThemeToggle;
