import Link from "next/link";

export default function Article({ title, description, href }) {
    return (
        <article className="p-6 border border-gray-400 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="text-gray-500 text-xl mt-2">{description}</p>
            <Link href={href}>
                <a className="mt-4 block w-fit hover:underline">Read More →</a>
            </Link>
        </article>
    );
}
