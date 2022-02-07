import Header from "@components/Atoms/Header";
import Head from "next/head";

export default function Root({ title = "Home", children }) {
    const _title = `Del Oro FFA | ${title}`;
    const _description = "Del Oro FFA is a youth organization that provides the best learning experience with an obsessive focus on leadership and career skills.";

    return (
        <>
            <Head>
                <meta charSet="utf-8" />

                <meta name="author" content="Nathan Pham" />
                <meta name="description" content={_description} />
                <meta name="keywords" content="Del Oro, FFA, Farm" />

                <meta property="og:author" content="Nathan Pham" />
                <meta property="og:title" content={_title} />
                <meta property="og:description" content={_description} />
                <meta property="og:image" content="icons/apple-touch-icon.png" />

                <title>{_title}</title>

                <meta name="theme-color" content="#000000" />

                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
                <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

                <link rel="manifest" href="/site.webmanifest" />

                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
                <meta name="HandheldFriendly" content="true" />
                <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            </Head>
            <Header />
            <div className="mt-20">{children}</div>
        </>
    );
}
