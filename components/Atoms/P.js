import css from "utils/css";

const P = ({ className, children }) => (
    <p className={css("text-gray-500 text-xl dark:text-gray-400", className)}>
        {children}
    </p>
);

export default P;
