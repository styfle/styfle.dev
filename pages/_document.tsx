import Document, { Html, Head, Main, NextScript } from 'next/document'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="/global.css" rel="stylesheet"></link>
        </Head>
        <body>
          <Navigation />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    )
  }
}