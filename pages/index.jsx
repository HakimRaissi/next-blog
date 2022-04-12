/* Imports */
import Head from "next/head";
import Link from "next/link";

import { PostCard } from "../components";

import { getFeaturedPosts, getPosts } from "../services";

/* Main Component */

const Home = ({ posts, featuredPosts }) => {
    return (
        <>
            <Head>
                <title> Haki Code | Home</title>
            </Head>

            <div className="flex w-full min-h-screen">
                <div className="hidden w-3/12 min-h-screen px-4 py-4 md:block">
                    <div className="bg-white flex flex-row justify-center items-center rounded-md">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent h-full w-full p-2 outline-none text-black rounded-md"
                        />
                        <button>
                            <i className="ri-search-line text-black text-2xl p-1"></i>
                        </button>
                    </div>

                    <nav className=" flex flex-col space-y-4 my-4">
                        <Link href="/">
                            <a className="hover:text-blue-500">Home</a>
                        </Link>

                        <Link href="/categories">
                            <a className="hover:text-blue-500">Categories</a>
                        </Link>

                        <Link href="/about">
                            <a className="hover:text-blue-500">About</a>
                        </Link>

                        <Link href="/contact">
                            <a className="hover:text-blue-500">Contact</a>
                        </Link>
                    </nav>

                    <div className="flex flex-row justify-center items-center space-x-8">
                        <Link href="https://twitter.com" passHref>
                            <a target="_blank" rel="noopener noreferrer">
                                <i className="ri-twitter-fill text-2xl"></i>
                            </a>
                        </Link>

                        <Link href="https://github.com" passHref>
                            <a target="_blank" rel="noopener noreferrer">
                                <i className="ri-github-fill text-2xl"></i>
                            </a>
                        </Link>

                        <Link href="https://instagram.com" passHref>
                            <a target="_blank" rel="noopener noreferrer">
                                <i className="ri-instagram-fill text-2xl"></i>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="w-full min-h-screen pt-4 md:w-9/12 md:mr-3 lg:w-6/12 lg:mx-3">
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>

                <div className="hidden w-3/12 min-h-screen px-3 py-4 lg:block">
                    {featuredPosts.map((post) => (
                        <PostCard
                            key={post.id}
                            post={post}
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

export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    const featuredPosts = (await getFeaturedPosts()) || [];

    return { props: { posts, featuredPosts } };
}

/* Exports */

export default Home;
