/* Imports */

import Head from "next/head";

import { CategoryTile } from "../components";

import { getCategories } from "../services";

/* Main Component */

const Categories = ({ categories }) => {
    return (
        <>
            <Head>
                <title> Haki Code | Categories</title>
            </Head>

            <div className="w-full pt-8">
                <div className="flex flex-wrap justify-center items-center">
                    {categories.map((category) => (
                        <CategoryTile key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </>
    );
};

/* Props */

export async function getStaticProps() {
    const categories = (await getCategories()) || [];

    return { props: { categories } };
}

/* Exports */

export default Categories;
