import { useState, useRef, useEffect, useContext } from "react";
import Link from "next/link";

import themeContext from "components/Theme/themeContext";

import { lerp } from "utils/CustomMath";

import useSlickLinks from "hooks/useSlickLinks";
import useFrame from "hooks/useFrame";

const links = ["Home", "Posts", "About", "Gallery"];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const $transitionSVGPath = useRef(null);
    const $transition = useRef(null);
    const y = useRef(100);
    const c = useRef(100);

    const [dark] = useContext(themeContext);

    const onClick = () => {
        setIsOpen(!isOpen);
    };

    useSlickLinks();

    useFrame(
        (animationID) => {
            try {
                if (isOpen) {
                    y.current = lerp(y.current, 0, 0.08 * 2);
                    c.current = lerp(c.current, 0, 0.1 * 2);

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
                    y.current = lerp(y.current, 100, 0.08 * 2);
                    c.current = lerp(c.current, 100, 0.1 * 2);

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
        },
        [isOpen]
    );

    return (
        <>
            <div className="header__backdrop bg-[rgba(255, 255, 255, 0.9)] dark:bg-[rgba(0, 0, 0, 0.9)] transition-colors"></div>
            <header className="header px-6 md:px-16 py-6">
                <h1 className="font-semibold text-xl">
                    <Link href="/">
                        <a className="flex items-center">
                            <img
                                src="/favicon-64x64.png"
                                className="mr-2 w-[32px] h-[32px]"
                                alt="Chicken Emoji"
                            />{" "}
                            <span className="dark:text-white">do ffa.</span>
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
                    <span className="header__menu__bar header__menu__bar--top bg-black dark:bg-white"></span>
                    <span className="header__menu__bar header__menu__bar--bottom bg-black dark:bg-white"></span>
                </div>
            </header>
            <div className="transition" ref={$transition}>
                <div className="text-yellow-500 dark:text-gray-900">
                    <svg
                        className="transition__svg"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <path
                            className="transition__svg__path"
                            fill="currentColor"
                            vectorEffect="non-scaling-stroke"
                            d="M 0 100 L 100 100 100 100 0 100 C 0 0, 0 0, 0 100"
                            ref={$transitionSVGPath}
                        />
                    </svg>
                </div>

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
                                <a className="slick-link dark:text-white">
                                    {link}
                                </a>
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
