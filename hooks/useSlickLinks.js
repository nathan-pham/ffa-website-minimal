import { useEffect } from "react";
import gsap, { Expo } from "gsap";

const maxHeight = 1.5 * 1.4;

const useSlickLinks = () => {
    useEffect(() => {
        const spanify = (el) => {
            const text = typeof el == "string" ? el : el.textContent;
            const chars = text.split("").map((char) => {
                const span = document.createElement("span");
                span.textContent = char;
                span.style.display = "inline-block";
                return span;
            });

            return chars;
        };

        const slickLinks = [...document.querySelectorAll(".slick-link")];
        const actualText = [];

        slickLinks.forEach((link) => {
            Object.assign(link.style, {
                maxHeight: `${maxHeight}rem`,
                display: "block",
                overflow: "hidden",
            });

            const textContent = link.textContent;
            actualText.push(textContent);

            const spans1 = spanify(textContent);
            link.textContent = "";
            link.append(...spans1);

            const div = document.createElement("div");
            const spans2 = spanify(textContent);
            div.append(...spans2);
            link.append(div);

            const timeline = gsap
                .timeline({ paused: true })
                .add("start")
                .fromTo(
                    spans1,
                    {
                        y: 0,
                        skewX: 0,
                    },
                    {
                        ease: Expo.easeInOut,
                        stagger: 0.02,
                        y: `-${maxHeight}rem`,
                        skewX: 40,
                    },
                    "start"
                )
                .fromTo(
                    spans2,
                    {
                        y: 0,
                        skewX: 40,
                    },
                    {
                        delay: 0.1,
                        ease: Expo.easeInOut,
                        stagger: 0.02,
                        opacity: 1,
                        y: `-${maxHeight + 0.25}rem`,
                        skewX: 0,
                    },
                    "start"
                );

            // TODO: warning! refactor this
            link.onmouseover = () => {
                timeline.play();
            };

            link.onmouseleave = () => {
                timeline.reverse();
            };
        });

        return () => {
            for (let i = 0; i < slickLinks.length; i++) {
                slickLinks[i].textContent = actualText[i];
            }
        };
    }, []);
};

export default useSlickLinks;
