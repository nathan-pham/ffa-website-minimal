import { useState, useEffect } from "react";

const useDarkMode = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (window.localStorage) {
            setDark(
                localStorage.theme === "dark" ||
                    (!("theme" in localStorage) &&
                        window.matchMedia("(prefers-color-scheme: dark)")
                            .matches)
            );
        }
    }, []);

    return dark;
};

export default useDarkMode;
