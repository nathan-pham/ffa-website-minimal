export default function GenericTitle({ title, description, margin = "mt-4" }) {
    return (
        <>
            <h1
                className={[
                    "text-5xl md:text-6xl font-extrabold leading-tight",
                    margin,
                ].join(" ")}
            >
                {title}
            </h1>
            <p className="mt-2 text-gray-500 text-lg md:text-xl">
                {description}
            </p>
        </>
    );
}
