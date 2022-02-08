export default function SecondaryButton({ className, children }) {
    return (
        <button
            className={[
                "whitespace-nowrap bg-yellow-500 text-white rounded-md px-6 py-3 w-44 font-semibold border transition-colors border-yellow-500 hover:bg-white hover:text-yellow-500",
                className,
            ].join(" ")}
        >
            {children}
        </button>
    );
}
