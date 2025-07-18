import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/logo-cent-md8qd7zz.png" />
        <link rel="shortcut icon" type="image/png" href="/logo-cent-md8qd7zz.png" />
        <link rel="apple-touch-icon" href="/logo-cent-md8qd7zz.png" />
        
        {/* Softgen AI monitoring script */}
        <script 
          src="https://cdn.softgen.ai/script.js" 
          async 
          data-softgen-monitoring="true"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
