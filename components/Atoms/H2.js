import css from "utils/css";

const H2 = ({ className, children }) => (
    <p className={css("text-5xl font-bold dark:text-white", className)}>
        {children}
    </p>
);

export default H2;
