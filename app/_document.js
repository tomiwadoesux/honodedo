// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="no-mobile no-touch">
      <Head>
        <link rel="stylesheet" href="/assets/css/styles.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Add other font links here */}
      </Head>
      <body className="appear-animate body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}