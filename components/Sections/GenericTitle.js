export default function GenericTitle({ title, description }) {
    return (
        <>
            <h1 className="text-6xl font-extrabold leading-tight mt-4">{title}</h1>
            <p className="mt-2 text-gray-500 text-xl">{description}</p>
        </>
    );
}
