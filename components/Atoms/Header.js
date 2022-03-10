import { useState, useRef, useEffect } from "react";
import Link from "next/link";

import gsap, { Expo } from "gsap";

const lerp = (a, b, n) => (1 - n) * a + n * b;

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const $transitionSVGPath = useRef(null);
    const $transition = useRef(null);
    const y = useRef(100);
    const c = useRef(100);

    const onClick = () => {
        setIsOpen(!isOpen);
    };

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
                maxHeight: `${1.5 * 1.33333333}rem`,
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
                        stagger: 0.05,
                        y: -30,
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
                        stagger: 0.05,
                        opacity: 1,
                        y: -36,
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

    useEffect(() => {
        let animationID = null;

        const animate = () => {
            try {
                if (isOpen) {
                    y.current = lerp(y.current, 0, 0.08);
                    c.current = lerp(c.current, 0, 0.1);
                    $transition.current.style.pointerEvents = "auto";
                    $transitionSVGPath.current.setAttribute(
                        "d",
                        `M 0 ${y.current} L 0 100 100 100 100 ${
                            y.current
                        } C ${50} ${c.current}, ${50} ${c.current}, 0 ${
                            y.current
                        }`
                    );
                } else {
                    y.current = lerp(y.current, 100, 0.065);
                    c.current = lerp(c.current, 100, 0.08);

                    $transition.current.style.pointerEvents = "none";
                    $transitionSVGPath.current.setAttribute(
                        "d",
                        `M 0 ${y.current} L 0 100 100 100 100 ${
                            y.current
                        } C 50 ${c.current}, ${50} ${c.current}, 0 ${y.current}`
                    );
                }
            } catch (e) {
                cancelAnimationFrame(animationID);
            }

            animationID = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationID);
        };
    }, [isOpen]);

    const links = ["Home", "Posts", "About", "Gallery"];

    // TODO: add bg

    return (
        <>
            <div className="header__backdrop"></div>
            <header className="header px-16 py-6">
                <h1 className="font-semibold text-xl">
                    <Link href="/">
                        <a className="flex items-center">
                            <img src="/favicon-32x32.png" className="mr-2" />{" "}
                            Del Oro FFA
                        </a>
                    </Link>
                </h1>
                <div
                    className={[
                        "header__menu",
                        isOpen ? "header__menu--active" : "",
                    ].join(" ")}
                    onClick={onClick}
                >
                    <span className="header__menu__bar header__menu__bar--top"></span>
                    <span className="header__menu__bar header__menu__bar--bottom"></span>
                </div>
            </header>
            <div className="transition" ref={$transition}>
                <svg
                    className="transition__svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path
                        className="transition__svg__path"
                        fill="#fcc42a"
                        vectorEffect="non-scaling-stroke"
                        d="M 0 100 L 100 100 100 100 0 100 C 0 0, 0 0, 0 100"
                        ref={$transitionSVGPath}
                    />
                </svg>

                <ul
                    className={[
                        "transition__list",
                        isOpen ? "transition__list--active" : "",
                    ].join(" ")}
                >
                    {links.map((link, i) => (
                        <li className="transition__list__item" key={i}>
                            <Link
                                href={
                                    link == "Home"
                                        ? "/"
                                        : `/${link.toLowerCase()}`
                                }
                            >
                                <a className="slick-link">{link}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx>{`
                /* HEADER */
                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    z-index: 12;
                    background: none;
                }

                .header__backdrop {
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 5rem;
                    z-index: 2;
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(5px);
                }

                .header__menu {
                    position: relative;
                    display: flex;
                    justify-content: space-around;
                    flex-direction: column;
                    width: 1.875rem;
                    height: 0.625rem;
                    cursor: pointer;
                    z-index: 15;
                }

                .header__menu__bar {
                    height: 2px;
                    background: #000;
                    transform-origin: center;
                    transition: 0.2s ease;
                }

                .header__menu__bar--bottom {
                    width: 80%;
                }

                .header__menu--active .header__menu__bar {
                    position: absolute;
                    left: 0;
                    width: 100%;
                }

                .header__menu--active .header__menu__bar--top {
                    top: 40%;
                    transform: rotate(45deg);
                }

                .header__menu--active .header__menu__bar--bottom {
                    bottom: 40%;
                    transform: rotate(-45deg);
                }

                /* TRANSITION */
                .transition {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow-x: hidden;
                    z-index: 11;
                }

                .transition__svg {
                    position: fixed;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 100%;
                }

                .transition__list {
                    list-style: none;
                    text-align: center;
                    z-index: 15;
                    opacity: 0;
                    transition: 0.1s ease;
                }

                .transition__list__item {
                    margin: 2rem 0;
                    font-weight: 500;
                    font-size: 1.5rem;
                    cursor: pointer;
                }

                .transition__list--active {
                    opacity: 1;
                    pointer-events: all;
                }
            `}</style>
        </>
    );
}
