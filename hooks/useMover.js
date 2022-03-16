import { useRef } from "react";

import useFrame from "./useFrame";
import { lerp } from "utils/CustomMath";

const useMover = (ref) => {
    const pos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

    const onMouseMove = (e) => {
        const bbox = ref.current.getBoundingClientRect();
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
        pos.current.x = lerp(pos.current.x, pos.current.targetX, 0.1);
        pos.current.y = lerp(pos.current.y, pos.current.targetY, 0.1);

        ref.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
    });

    return [onMouseMove, onMouseLeave];
};

export default useMover;
