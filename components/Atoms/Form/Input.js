import css from "utils/css";

export default function Input({ forLabel, className, name, ...props }) {
    return (
        <>
            {forLabel ? (
                <label htmlFor="name" className="capitalize font-bold text-lg">
                    {forLabel}
                </label>
            ) : (
                <></>
            )}

            <input
                className={css(
                    "border px-4 py-2 rounded-md outline-none focus:border-gray-500 dark:focus:border-gray-700 dark:bg-gray-900 dark:text-white dark:border-gray-800",
                    className
                )}
                name={name}
                id={name}
                {...props}
            />
        </>
    );
}
