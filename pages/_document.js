import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Come check out how Harsh Choudhary can help you level up your career as a software engineer."
          />
          <meta
            name="keywords"
            content="Learn React, kent c dodds, dan abramov, React blogs, Testing in JavaScript, Testing in React, Learn JavaScript, Learn TypeScript"
          />

          <meta property="og:url" content="https://harshkc.tech" />
          <meta property="og:title" content="Harsh Choudhary" />
          <meta
            property="og:description"
            content="Come check out how Harsh Choudhary can help you level up your career as a software engineer."
          />

          <meta name="twitter:title" content="Harsh Choudhary" />
          <meta name="twitter:site" content="@harshkc99" />
          <meta
            name="twitter:description"
            content="Come check out how Harsh Choudhary can help you level up your career as a software engineer."
          />
          <meta name="twitter:alt" content="Harsh Choudhary"></meta>
          <link rel="canonical" href="https://stagfolio.vercel.app"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
