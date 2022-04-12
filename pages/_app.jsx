/* Imports */

import { Layout } from "../components";

import "remixicon/fonts/remixicon.css";
import "../styles/globals.css";

/* Main Component */

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

/* Exports */

export default MyApp;
