import { Html, Head, Main, NextScript } from 'next/document'

export default function MyDocument() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta name="author" content="David Veszelovszki" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,700;1,400&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
} 