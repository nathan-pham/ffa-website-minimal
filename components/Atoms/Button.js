import { useRef } from "react";

import useMover from "hooks/useMover";
// import useFrame from "hooks/useFrame";

import css from "utils/css";

export default function Button({ className, children }) {
    const buttonRef = useRef(null);
    const [onMouseMove, onMouseLeave] = useMover(buttonRef);

    return (
        <div
            className="w-fit h-fit"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            ref={buttonRef}
        >
            <button
                className={css(
                    "whitespace-nowrap relative text-lg text-black rounded-md px-8 py-4 w-44 font-semibold border transition-colors border-black hover:text-white hover:bg-black overflow-hidden dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-white",
                    className
                )}
            >
                <span className="pointer-events-none">{children}</span>
            </button>
        </div>
    );
}
