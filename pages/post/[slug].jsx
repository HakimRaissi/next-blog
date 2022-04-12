/* Imports */

import React from "react";

import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import moment from "moment";

import { PostCard, Loader } from "../../components";

import { getPosts, getPost, getFeaturedPosts } from "../../services";

/* Main Component */

const Post = ({ post, featuredPosts }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;

        if (obj) {
            if (obj.bold) {
                modifiedText = <b key={index}>{text}</b>;
            }

            if (obj.italic) {
                modifiedText = <em key={index}>{text}</em>;
            }

            if (obj.underline) {
                modifiedText = <u key={index}>{text}</u>;
            }
        }

        switch (type) {
            case "heading-three":
                return (
                    <h3 key={index} className="text-xl font-semibold mb-4">
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </h3>
                );
            case "paragraph":
                return (
                    <p key={index} className="mb-8">
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </p>
                );
            case "heading-four":
                return (
                    <h4 key={index} className="text-md font-semibold mb-4">
                        {modifiedText.map((item, i) => (
                            <React.Fragment key={i}>{item}</React.Fragment>
                        ))}
                    </h4>
                );
            case "image":
                return (
                    <img
                        key={index}
                        alt={obj.title}
                        height={obj.height}
                        width={obj.width}
                        src={obj.src}
                    />
                );
            default:
                return modifiedText;
        }
    };

    return (
        <>
            <Head>
                <title> Haki Code | {post.title}</title>
            </Head>
            <div className="flex flex-col justify-center w-full lg:flex-row">
                <div className="min-h-screen pt-4 lg:w-8/12">
                    <div>
                        <img
                            src={post.featuredImage.url}
                            alt={post.title}
                            className="w-full  object-cover"
                        />
                    </div>

                    <div className="p-4">
                        <div className="flex justify-start items-center w-full my-4">
                            <Image
                                src={post.author.photo.url}
                                alt={post.author.name}
                                width={50}
                                height={50}
                            />

                            <div className="ml-4">
                                <div>
                                    <h3 className="font-bold">
                                        {post.author.name}
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        posted on{" "}
                                        {moment(post.createdAt).format(
                                            "DD MMMM YYYY"
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-4xl font-bold">{post.title}</h1>

                        <div>
                            {post.categories.map((category) => (
                                <span
                                    key={category.id}
                                    className="text-sm capitalize text-gray-400 mr-2"
                                >
                                    <Link href={`/posts`}>
                                        <a> #{category.name}</a>
                                    </Link>
                                </span>
                            ))}
                        </div>

                        <div className="mt-8">
                            {post.content.raw.children.map((typeObj, index) => {
                                const children = typeObj.children.map(
                                    (item, itemindex) =>
                                        getContentFragment(
                                            itemindex,
                                            item.text,
                                            item
                                        )
                                );

                                return getContentFragment(
                                    index,
                                    children,
                                    typeObj,
                                    typeObj.type
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="w-full p-4 mx-auto md:w-8/12 lg:w-4/12">
                    {featuredPosts.map((item) => (
                        <PostCard
                            key={item.id}
                            post={item}
                            displayImage={false}
                            displayReactions={false}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

/* Props */

export async function getStaticProps({ params }) {
    const post = await getPost(params.slug);
    const featuredPosts = (await getFeaturedPosts()) || [];

    return { props: { post, featuredPosts } };
}

export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map((post) => ({ params: { slug: post.slug } })),
        fallback: true,
    };
}

/* Exports */

export default Post;
