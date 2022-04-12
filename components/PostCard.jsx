/* Imports */
import Link from "next/link";
import Image from "next/image";

import moment from "moment";

/* Main Component */

const PostCard = ({ post, displayImage = true, displayReactions = true }) => {
    return (
        <Link href={`/post/${post.slug}`}>
            <a>
                <div className="w-full mb-4 bg-neutral-800 rounded-md">
                    <div className={displayImage ? "block" : "hidden"}>
                        <img
                            src={post.featuredImage.url}
                            alt={post.title}
                            className="rounded-t-md"
                        />
                    </div>
                    <div className="p-2">
                        <div className="flex ">
                            <Image
                                src={post.author.photo.url}
                                alt={post.author.name}
                                width={50}
                                height={50}
                            />
                            <div className="ml-2">
                                <p className="font-bold">{post.author.name}</p>
                                <p className="text-gray-400 text-sm">
                                    {moment(post.createdAt).fromNow()}
                                </p>
                            </div>
                        </div>

                        <h3 className="font-bold text-2xl my-3 hover:text-blue-500">
                            {post.title}
                        </h3>

                        <div>
                            {post.categories.map((category) => (
                                <span
                                    key={category.id}
                                    className="text-sm capitalize text-gray-400 mr-2"
                                >
                                    #{category.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
};

/* Exports */

export default PostCard;
