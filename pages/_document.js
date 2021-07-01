import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Open+Sans:wght@400;700&display=swap&family=Fjalla+One&display=swap&family=Merriweather:wght@700&display=swap&family=Castoro&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-background font-body text-main">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
