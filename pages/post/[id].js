import Section from "@components/Sections/Section";
import TextGradient from "@components/TextGradient";
import Footer from "@components/Atoms/Footer";

import Link from "next/link";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

import { promises as fs } from "fs";
import * as path from "path";

const postsDirectory = path.join(process.cwd(), "./pages/post/markdown");

export default function Post({ id, metadata, content }) {
    return (
        <>
            <Section>
                <Link href="/post">
                    <a className="block mt-10 hover:underline">← Back to Posts</a>
                </Link>
                <h1 className="text-6xl font-extrabold leading-tight">
                    You're reading: <TextGradient>{metadata.title}</TextGradient>
                </h1>
                <div className="prose prose-slate w-full">
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </Section>
            <Footer />
        </>
    );
}

// const fs = require("fs").promises;

export async function getStaticPaths() {
    const filenames = await fs.readdir(postsDirectory);
    const paths = filenames.map((filename) => ({ params: { id: filename.replace(".md", "").toLowerCase() } }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const fullPath = path.join(postsDirectory, `${params.id}.md`);
    const fileContents = await fs.readFile(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = (await remark().use(html).process(matterResult.content)).toString();

    return {
        props: {
            id: params.id,
            metadata: matterResult.data,
            content: processedContent,
        },
    };
}
