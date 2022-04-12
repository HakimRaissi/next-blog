/* Imports */

import { useState } from "react";

import Link from "next/link";

/* Main Component */

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 right-0 w-full h-[56px] flex justify-between bg-neutral-800">
            <div className="max-w-6xl w-full mx-auto px-4 flex justify-start items-center">
                <div
                    onClick={() => setMenuOpen(true)}
                    className="space-y-1 mr-4 cursor-pointer md:hidden"
                >
                    <span className="block w-6 h-0.5 bg-white "></span>
                    <span className="block w-6 h-0.5 bg-white "></span>
                    <span className="block w-6 h-0.5 bg-white "></span>
                </div>

                <div>
                    <Link href="/">
                        <a className=" text-xl font-bold"> Haki Code</a>
                    </Link>
                </div>
            </div>

            <div
                id="menu"
                className={`${
                    menuOpen ? "translate-x-0" : "translate-x-[-100vw]"
                } absolute top-0 left-0 w-[75vw] h-screen p-4 space-y-4 bg-neutral-800 z-10 transition-all delay-200 ease-linear md:hidden`}
            >
                <div className=" flex justify-between items-center">
                    <h2 className="font-bold text-xl">Haki Code</h2>
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="text-2xl"
                    >
                        <i className="ri-close-fill"></i>
                    </button>
                </div>

                <div
                    id="searchbar"
                    className="bg-white flex flex-row justify-center items-center rounded-md"
                >
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent h-full w-full p-2 outline-none text-black rounded-md"
                    />
                    <button>
                        <i className="ri-search-line text-black text-2xl p-1"></i>
                    </button>
                </div>

                <nav className=" flex flex-col space-y-4 ">
                    <Link href="/">
                        <a onClick={() => setMenuOpen(false)}>Home</a>
                    </Link>

                    <Link href="/categories">
                        <a onClick={() => setMenuOpen(false)}>Categories</a>
                    </Link>

                    <Link href="/about">
                        <a onClick={() => setMenuOpen(false)}>About</a>
                    </Link>

                    <Link href="/contact">
                        <a onClick={() => setMenuOpen(false)}>Contact</a>
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
        </header>
    );
};

/* Exports */

export default Header;
