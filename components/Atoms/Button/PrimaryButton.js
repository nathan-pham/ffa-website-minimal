import { useRef, useEffect } from "react";
import { lerp } from "utils/CustomMath";
import useFrame from "hooks/useFrame";

export default function PrimaryButton({ className, children }) {
    const pos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
    const buttonRef = useRef(null);

    const onMouseMove = (e) => {
        const bbox = e.target.closest(".js-button").getBoundingClientRect();
        const x = e.clientX - bbox.left - bbox.width / 2;
        const y = e.clientY - bbox.top - bbox.height / 2;

        pos.current.targetX = x;
        pos.current.targetY = y;
    };

    const onMouseLeave = (e) => {
        pos.current.targetX = 0;
        pos.current.targetY = 0;
    };

    useFrame(() => {
        pos.current.x = lerp(pos.current.x, pos.current.targetX, 1);
        pos.current.y = lerp(pos.current.y, pos.current.targetY, 1);

        buttonRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
    });

    return (
        <div
            className="js-button w-fit h-fit"
            style={{
                transition: "transform 200ms ease-out",
            }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            ref={buttonRef}
        >
            <button
                className={[
                    "whitespace-nowrap relative text-lg text-black rounded-md px-8 py-4 w-44 font-semibold border transition-colors border-black hover:text-white hover:bg-black overflow-hidden",
                    className,
                ].join(" ")}
            >
                <span className="pointer-events-none">{children}</span>
            </button>
        </div>
    );
}
