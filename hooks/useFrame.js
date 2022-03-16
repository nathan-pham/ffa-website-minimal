import { useEffect } from "react";

const useFrame = (animationLoop, dependencies = []) => {
    useEffect(() => {
        let animationID = null;

        const animate = () => {
            animationLoop(animationID);
            animationID = window.requestAnimationFrame(animate);
        };

        animationID = animate();

        return () => {
            window.cancelAnimationFrame(animationID);
        };
    }, dependencies);
};

export default useFrame;
