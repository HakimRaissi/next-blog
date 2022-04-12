/* Imports */

import React from "react";

import { useRouter } from "next/router";

import { PostCard, Loader } from "../../components";

import { getPostsByCategories, getCategories } from "../../services";

/* Main Component */

const Posts = ({ posts }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <div className="w-full">
            <div className="w-full mx-auto pt-4 md:w-8/12">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

/* Props */

export async function getStaticProps({ params }) {
    const posts = (await getPostsByCategories(params.slug)) || [];

    return { props: { posts } };
}

export async function getStaticPaths() {
    const categories = await getCategories();
    return {
        paths: categories.map((category) => ({
            params: { slug: category.slug },
        })),
        fallback: true,
    };
}

/* Exports */

export default Posts;
