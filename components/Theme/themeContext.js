import { createContext } from "react";

const themeContext = createContext({
    dark: false,
    setDark: () => {},
});

export default themeContext;
