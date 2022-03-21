import { useEffect, useRef } from "react";
import normalizeWheel from "normalize-wheel";

import Media from "./Media";
import { useFrame } from "@react-three/fiber";

import { lerp } from "three/src/math/MathUtils";

export default function Gallery({ galleryRef, imageRefs }) {
    const scroll = useRef({
        ease: 0.05,
        current: 0,
        target: 0,
        speed: 2,
        direction: "",
    });

    useEffect(() => {
        const onWheel = (e) => {
            scroll.current.target += normalizeWheel(e).pixelY * 0.5;
        };

        window.addEventListener("mousewheel", onWheel);
        window.addEventListener("wheel", onWheel);

        return () => {
            window.removeEventListener("mousewheel", onWheel);
            window.removeEventListener("wheel", onWheel);
        };
    }, []);

    useFrame(() => {
        scroll.current.target += scroll.current.speed
        scroll.current.current = lerp(scroll.current.current, scroll.current.target, scroll.current.ease);
    
        if (scroll.current.current > scroll.current.last) {
            scroll.current.direction = "down";
            scroll.current.speed = 2;
        } else if (scroll.current.current < scroll.current.last) {
            scroll.current.direction = "up";
            scroll.current.speed = -2;
        }
    })


    return (
        <>
            {imageRefs.map((element, i) => (
                <Media element={element} galleryRef={galleryRef} scroll={scroll} key={i} test={i} />
            ))}
        </>
    );
}
