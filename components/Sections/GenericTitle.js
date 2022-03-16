import P from "components/Atoms/P";

export default function GenericTitle({ title, description, margin = "mt-4" }) {
    return (
        <>
            <h1
                className={[
                    "text-5xl md:text-6xl font-extrabold dark:text-white",
                    margin,
                ].join(" ")}
            >
                {title}
            </h1>
            <P className="md:text-xl mt-4 leading-snug">{description}</P>
        </>
    );
}
