import Section from "components/Sections/Section";
import Footer from "components/Atoms/Footer";
import TextGradient from "components/TextGradient";
import Article from "components/Atoms/Article";
import Root from "components/Root";

import Input from "components/Atoms/Form/Input";

import { useState } from "react";

import matter from "gray-matter";
import { promises as fs } from "fs";
import * as path from "path";

import GenericTitle from "components/Sections/GenericTitle";

const postsDirectory = path.join(process.cwd(), "./pages/posts/markdown");

export default function Post({ posts = [] }) {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const filterPosts = (post) =>
        post.data.title.toLowerCase().includes(search.toLowerCase()) ||
        post.data.description.toLowerCase().includes(search.toLowerCase());
    const sortPosts = (a, b) => new Date(a.data.date) - new Date(b.data.date);

    return (
        <Root title="Posts">
            <Section>
                <GenericTitle
                    title={
                        <>
                            <TextGradient>Search</TextGradient> through posts
                        </>
                    }
                    description="Find the information you need about Del Oro FFA."
                />
                <Input
                    placeholder="keyword or title"
                    className="mt-6 w-80"
                    value={search}
                    onChange={handleSearch}
                />

                <div className="mt-10">
                    {posts
                        .filter(filterPosts)
                        .sort(sortPosts)
                        .reverse()
                        .map((post, i) => (
                            <Article
                                {...post.data}
                                href={post.href || ""}
                                key={`article-${i}`}
                            />
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
            data: matter(
                await fs.readFile(path.join(postsDirectory, post), "utf8")
            ).data,
            href: `/posts/${post.replace(/\.md$/, "")}`,
        }))
    );

    return {
        props: {
            posts,
        },
    };
}
