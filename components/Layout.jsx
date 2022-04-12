/* Imports */

import Header from "./Header";
// import Footer from "./Footer.jsx";

/* Main Component */

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="max-w-6xl mx-auto mt-[56px]">{children}</div>
        </>
    );
};

/* Exports */

export default Layout;
