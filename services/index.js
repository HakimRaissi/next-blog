import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPost = async (slug) => {
    const query = gql`
        query getPost($slug: String!) {
            post(where: { slug: $slug }) {
                createdAt
                author {
                    createdAt
                    bio
                    id
                    name
                    photo {
                        url
                    }
                }
                id
                title
                slug
                featuredImage {
                    url
                }
                featuredPost
                categories {
                    name
                    id
                }
                content {
                    raw
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query, { slug });

    return result.post;
};

export const getPosts = async () => {
    const query = gql`
        query getPosts {
            posts {
                content {
                    raw
                }
                author {
                    bio
                    name
                    id
                    photo {
                        url
                    }
                }
                categories {
                    name
                    id
                    slug
                }
                createdAt
                excerpte
                featuredImage {
                    url
                }
                slug
                title
                id
            }
        }
    `;

    const result = await request(graphqlAPI, query);

    return result.posts;
};

export const getFeaturedPosts = async () => {
    const query = gql`
        query getFeaturedPosts {
            posts(where: { featuredPost: true }) {
                author {
                    bio
                    name
                    id
                    photo {
                        url
                    }
                }
                categories {
                    id
                    name
                }
                content {
                    raw
                }
                featuredPost
                featuredImage {
                    url
                }
                title
                slug
                id
            }
        }
    `;

    const result = await request(graphqlAPI, query);

    return result.posts;
};

export const getCategories = async () => {
    const query = gql`
        query getCategories {
            categories {
                createdAt
                id
                name
                slug
            }
        }
    `;

    const result = await request(graphqlAPI, query);

    return result.categories;
};

export const getPostsByCategories = async (slug) => {
    const query = gql`
        query getPostsByCategory($slug: String!) {
            posts(where: { categories_some: { slug: $slug } }) {
                content {
                    raw
                }
                author {
                    bio
                    name
                    id
                    photo {
                        url
                    }
                }
                categories {
                    name
                    id
                    slug
                }
                createdAt
                excerpte
                featuredImage {
                    url
                }
                slug
                title
                id
            }
        }
    `;

    const result = await request(graphqlAPI, query, { slug });

    return result.posts;
};
