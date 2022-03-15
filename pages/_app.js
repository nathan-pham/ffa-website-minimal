import { SwitchTransition, Transition } from "react-transition-group";
import { useState } from "react";
import gsap from "gsap";

import "tailwindcss/tailwind.css";

import themeContext from "components/Theme/themeContext";
import Analytics from "components/Analytics";
import useDarkMode from "hooks/useDarkMode";

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
    const [dark, setDark] = useState(useDarkMode());

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
