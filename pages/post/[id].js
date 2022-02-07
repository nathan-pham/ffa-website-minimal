import Section from "@components/Sections/Section";
import TextGradient from "@components/TextGradient";
import Footer from "@components/Atoms/Footer";
import Header from "@components/Atoms/Header";

import Link from "next/link";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

import { promises as fs } from "fs";
import * as path from "path";
import Root from "@components/Root";

const postsDirectory = path.join(process.cwd(), "./pages/post/markdown");

export default function Post({ metadata, content }) {
    return (
        <Root title={metadata.title}>
            <Section>
                <div>
                    <Link href="/post"><a className="hover:underline">← Back to Posts</a></Link> • <a target="_blank" rel="noreferrer" href={`https://github.com/nathan-pham/ffa-website-minimal/blob/main/pages/post/markdown/${metadata.title}.md`} className="hover:underline cursor-pointer">Edit</a>
                </div>
                <h1 className="text-6xl font-extrabold leading-tight">
                <TextGradient>Reading:</TextGradient> {metadata.title}
                </h1>
                <div className="prose prose-slate w-full mt-4">
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </Section>
            <Footer />
        </Root>
    );
}

// const fs = require("fs").promises;

export async function getStaticPaths() {
    const filenames = await fs.readdir(postsDirectory);
    const paths = filenames.map((filename) => ({ params: { id: filename.replace(".md", "") } }));

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
