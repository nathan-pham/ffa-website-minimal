import { useEffect } from "react";

const useFrame = (animationLoop) => {
    useEffect(() => {
        let animationID = null;

        const animate = () => {
            animationLoop();
            animationID = window.requestAnimationFrame(animate);
        };

        animationID = animate();

        return () => {
            window.cancelAnimationFrame(animationID);
        };
    }, []);
};

export default useFrame;
