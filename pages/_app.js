import { SwitchTransition, Transition } from "react-transition-group";
import gsap from "gsap";

import Analytics from "@components/Analytics";
import "tailwindcss/tailwind.css";
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
                <div>
                    <Component {...pageProps} />
                    {process.env.NODE_ENV === "production" && <Analytics />}
                </div>
            </Transition>
        </SwitchTransition>
    );
    return;
}
