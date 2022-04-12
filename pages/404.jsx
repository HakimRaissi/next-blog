/* Imports */

import { useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

/* Main Component */

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/");
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Head>
                <title> Haki Code | Error 404</title>
            </Head>

            <div>
                <h1>That page cannot be found</h1>
                <Link href="/">
                    <a>Go back to the homepage</a>
                </Link>
            </div>
        </>
    );
};

/* Exports */

export default NotFound;
