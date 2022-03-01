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
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MN6W52S');`,
            }}
          ></script>
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MN6W52S" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          ></noscript>
          <script
            type="text/javascript"
            src="https://static.typebot.io/typebot-1.0.0.js"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `var typebot = Typebot.Chat({publishId: "faq-mj24-mnn49",buttonColor: "#e27d60",buttonIconUrl: "",loadingColors: {chatBackground: "#ffffff",bubbleBackground: "#F7F8FF",typingDots: "#303235",},proactiveMessage: {avatar: "undefined",textContent: "Contact the sales team",delay: 60000,remember: true}});`,
            }}
          ></script>
          <script
            type="text/javascript"
            async
            defer
            src="https://buttons.github.io/buttons.js"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;