import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-rubik">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
