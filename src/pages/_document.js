import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet"></link>
      <body className="antialiased font-rubik scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
