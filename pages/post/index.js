import Section from "@components/Sections/Section";
import Footer from "@components/Atoms/Footer";
import Header from "@components/Atoms/Header";
import TextGradient from "@components/TextGradient";
import Input from "@components/Atoms/Input";
import Article from "@components/Atoms/Article";
import matter from "gray-matter";

import { useState } from "react";
import Link from "next/link";

import { promises as fs } from "fs";
import * as path from "path";
import Root from "@components/Root";

const postsDirectory = path.join(process.cwd(), "./pages/post/markdown");

export default function Post({ posts = [] }) {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filterPosts = (post) => post.data.title.toLowerCase().includes(search.toLowerCase()) || post.data.description.toLowerCase().includes(search.toLowerCase());

    return (
        <Root title="Posts">
            <Section>
                <Link href="/">
                    <a className="block hover:underline">← Back to Home</a>
                </Link>

                <h1 className="text-6xl font-extrabold leading-tight">
                    <TextGradient>Search</TextGradient> through posts
                </h1>
                <p className="mt-2 text-gray-500 text-xl">Find the information you need about Del Oro FFA.</p>
                <Input placeholder="keyword or title" className="mt-6 w-80" value={search} onChange={handleSearch} />

                <div className="mt-10">
                    {posts.filter(filterPosts).map((post, i) => (
                        <div className="mt-4" key={i}>
                            <Article {...post.data} href={post.href || ""} />
                        </div>
                    ))}
                </div>
            </Section>
            <Footer />
        </Root>
    );
}

export async function getStaticProps() {
    const filenames = await fs.readdir(postsDirectory);
    const posts = await Promise.all(
        filenames.map(async (post) => ({
            data: matter(await fs.readFile(path.join(postsDirectory, post), "utf8")).data,
            href: `/post/${post.replace(/\.md$/, "")}`,
        }))
    );

    return {
        props: {
            posts,
        },
    };
}
