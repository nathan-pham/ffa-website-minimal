import { SwitchTransition, Transition } from "react-transition-group";
import { useState, useEffect } from "react";
import gsap from "gsap";

import "tailwindcss/tailwind.css";

import themeContext from "components/Theme/themeContext";
import Analytics from "components/Analytics";

import "./_app.css";

const duration = 500;

const onEnter = (node) => {
    gsap.from(node, {
        duration: duration / 1000,
        autoAlpha: 0,
    });
};

const onExit = (node) => {
    gsap.to(node, {
        duration: duration / 1000,
        autoAlpha: 0,
    });
};

export default function App({ Component, pageProps, router }) {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        setDark(
            localStorage.theme === "dark" ||
                (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
        );
    }, []);

    useEffect(() => {
        if (dark) {
            document.body.style.backgroundColor = "#000";
        } else {
            document.body.style.backgroundColor = "#fff";
        }
    }, [dark]);

    return (
        <SwitchTransition>
            <Transition
                key={router.pathname}
                timeout={duration}
                in={true}
                onEnter={onEnter}
                onExit={onExit}
                mountOnEnter={true}
                unmountOnExit={true}
            >
                <themeContext.Provider value={[dark, setDark]}>
                    <div className={dark ? "dark" : ""}>
                        <Component {...pageProps} />
                        {process.env.NODE_ENV === "production" && <Analytics />}
                    </div>
                </themeContext.Provider>
            </Transition>
        </SwitchTransition>
    );
    return;
}
