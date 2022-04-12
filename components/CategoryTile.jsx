/* Imports */

import Link from "next/link";

/* Main Component */

const CategoryTile = ({ category }) => {
    return (
        <Link href={`/category/${category.slug}`}>
            <a>
                <div className="min-w-[250px] bg-neutral-900 rounded-md m-4 p-4 text-center">
                    <h3 className="hover:text-blue-500"># {category.name}</h3>
                </div>
            </a>
        </Link>
    );
};

/* Exports */

export default CategoryTile;
