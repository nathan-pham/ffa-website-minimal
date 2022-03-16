import regexifyString from "regexify-string";
import Link from "next/link";

import H2 from "./H2";
import P from "./P";

export default function Article({ title, description, href }) {
    const _title = regexifyString({
        pattern: /<.*?>/gim,
        decorator: (match, index) => (
            <span key={index}>{match.slice(1, -1)}</span>
        ),
        input: title,
    });

    return (
        <article
            className="p-6 border rounded-lg transition-all hover:-translate-y-1 hover:shadow-lg mt-4 dark:shadow-gray-900 dark:border-gray-900"
            style={{
                transition:
                    "box-shadow cubic-bezier(0.4, 0, 0.2, 1) 150ms, transform cubic-bezier(0.4, 0, 0.2, 1) 150ms",
            }}
        >
            <H2 className="text-3xl md:text-4xl">{_title}</H2>
            <P className="mt-2">{description}</P>
            <Link href={href}>
                <a className="mt-4 block w-fit hover:underline dark:text-white">
                    Read More →
                </a>
            </Link>
        </article>
    );
}
