import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <body>
          <script
            type="text/javascript"
            src="https://static.typebot.io/typebot-1.0.0.js"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `var typebot = Typebot.Chat({publishId: "faq-mj24-mnn49",buttonColor: "#e27d60",buttonIconUrl: "",loadingColors: {chatBackground: "#ffffff",bubbleBackground: "#F7F8FF",typingDots: "#303235",},proactiveMessage: {avatar: "undefined",textContent: "Contact the sales team",delay: 60000,remember: true}});`,
            }}
          ></script>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
