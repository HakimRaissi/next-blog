/* Imports */
import Head from "next/head";

/* Main Component */

const contact = () => {
    return (
        <>
            <Head>
                <title> Haki Code | Contact</title>
            </Head>

            <div className="w-full pt-8">
                <div className="p-4 bg-neutral-800 rounded-md mx-4">
                    <h2 className="font-bold text-3xl mb-8 mt-4 md:text-4xl">
                        Contacts
                    </h2>

                    <div className="flex flex-col space-y-4 text-xl">
                        <p>
                            <span>Email : </span>{" "}
                            <a
                                href="mailto:raissihakim1808@gmail.com"
                                className="text-blue-500"
                            >
                                raissihakim1808@gmail.com
                            </a>
                        </p>

                        <p>
                            <span>Twitter : </span>{" "}
                            <a
                                href="https://twitter.com/Hakim_Raissi_10"
                                className="text-blue-500"
                            >
                                @Hakim_Raissi_10
                            </a>
                        </p>

                        <p>
                            <span>Github : </span>{" "}
                            <a
                                href="https://github.com/HakimRaissi"
                                className="text-blue-500"
                            >
                                HakimRaissi
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

/* Exports */

export default contact;
