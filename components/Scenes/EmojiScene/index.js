import { useEffect, useRef } from "react";
import Emoji from "./Emoji";

const EmojiScene = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const emojis = useRef([]);

    useEffect(() => {
        let ctx = canvasRef.current.getContext("2d");
        let animationID = null;
        let mouseX, mouseY;
        let width, height;

        const onResize = () => {
            width = containerRef.current.offsetWidth;
            height = containerRef.current.offsetHeight;

            canvasRef.current.style.width = `${width}px`;
            canvasRef.current.style.height = `${height}px`;
            canvasRef.current.width = width;
            canvasRef.current.height = height;
        };

        const onMouseMove = (e) => {
            const bbox = e.target.getBoundingClientRect();

            mouseX = e.clientX - bbox.left;
            mouseY = e.clientY - bbox.top;
        };

        onResize();

        window.addEventListener("resize", onResize);
        containerRef.current.addEventListener("mousemove", onMouseMove);

        emojis.current = new Array(10).fill(0).map(
            (_) =>
                new Emoji({
                    width,
                    height,
                })
        );

        const animate = () => {
            animationID = requestAnimationFrame(animate);

            ctx.clearRect(0, 0, width, height);

            emojis.current.forEach((emoji) => emoji.update(mouseX, mouseY));
            emojis.current.forEach((emoji) => emoji.render(ctx));
        };

        animationID = animate();

        return () => {
            try {
                cancelAnimationFrame(animationID);
                window.removeEventListener("resize", onResize);
                containerRef.current.removeEventListener(
                    "mousemove",
                    onMouseMove
                );
            } catch (e) {}
        };
    }, []);

    return (
        <div className="w-full h-full absolute top-0 left-0" ref={containerRef}>
            <canvas ref={canvasRef}></canvas>
        </div>
    );
};

export default EmojiScene;
