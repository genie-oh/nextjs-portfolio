import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="ja">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700;900&family=Nanum+Gothic:wght@400;700;800&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
