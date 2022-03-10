export default function PrimaryButton({ className, children }) {
    const onMouseMove = (e) => {
        const bbox = e.target.closest(".js-button").getBoundingClientRect();
        const x = e.clientX - bbox.left - bbox.width / 2;
        const y = e.clientY - bbox.top - bbox.height / 2;

        e.target.closest(
            ".js-button"
        ).style.transform = `translate(${x}px, ${y}px)`;
    };

    const onMouseLeave = (e) => {
        e.target.closest(".js-button").style.transform = "";
    };

    return (
        <div
            className="js-button w-fit h-fit"
            style={{
                transition: "transform 200ms ease-out",
            }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
        >
            <button
                className={[
                    "whitespace-nowrap relative text-lg text-black rounded-md px-8 py-4 w-44 font-semibold border transition-colors border-black hover:text-white hover:bg-black overflow-hidden css-hover-group",
                    className,
                ].join(" ")}
            >
                <span className="pointer-events-none">{children}</span>
            </button>
        </div>
    );
}
