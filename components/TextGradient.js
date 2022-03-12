export default function TextGradient({
    gradient = "from-yellow-400 via-red-400 to-blue-500",
    children,
}) {
    return (
        <>
            <span
                className={[
                    "text-transparent bg-clip-text bg-gradient-to-r",
                    gradient,
                ].join(" ")}
            >
                {children}
            </span>
            <style jsx>{`
                span {
                    -webkit-box-decoration-break: clone;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            `}</style>
        </>
    );
}
