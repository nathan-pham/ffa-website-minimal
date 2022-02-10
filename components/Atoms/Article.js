import regexifyString from "regexify-string";
import Link from "next/link";

export default function Article({ title, description, href }) {
    const _title = regexifyString({
        pattern: /<.*?>/gim,
        decorator: (match, index) => <>{match.slice(1, -1)}</>,
        input: title,
    });

    return (
        <article className="p-6 border rounded-lg transition-all hover:-translate-y-1 hover:shadow-lg">
            <h2 className="text-4xl font-bold">{_title}</h2>
            <p className="text-gray-500 text-lg mt-2">{description}</p>
            <Link href={href}>
                <a className="mt-4 block w-fit hover:underline">Read More →</a>
            </Link>
        </article>
    );
}
