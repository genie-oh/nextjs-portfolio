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
          <title>Web Engineer's Portfolio</title>
          <meta
            name="description"
            content="Hello, I’m Genie, OH. I’m a senior back-end web engineer and middle full-stack engineer having interest of service architecture."
          />
          <meta property="og:url" content="https://genie-oh.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Web Engineer's Portfolio" />
          <meta
            property="og:description"
            content="Hello, I’m Genie, OH. I’m a senior back-end web engineer and middle full-stack engineer having interest of service architecture."
          />
          <meta
            property="og:image"
            content="https://genie-oh.vercel.app/img/ogp.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="genie-oh.vercel.app" />
          <meta property="twitter:url" content="https://genie-oh.vercel.app" />
          <meta name="twitter:title" content="Web Engineer's Portfolio" />
          <meta
            name="twitter:description"
            content="Hello, I’m Genie, OH. I’m a senior back-end web engineer and middle full-stack engineer having interest of service architecture."
          />
          <meta
            name="twitter:image"
            content="https://genie-oh.vercel.app/img/ogp.png"
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
