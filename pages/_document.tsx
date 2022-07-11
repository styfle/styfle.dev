import Document, { Html, Head, Main, NextScript } from 'next/document';
const { GA_ID } = process.env;

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {GA_ID ? (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                    });
                `,
                }}
              />
            </>
          ) : null}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
