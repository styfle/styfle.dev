import Head from 'next/head'

import Navigation from './Navigation'
import Footer from './Footer'

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ children, title }: Props) {
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <title>{title}</title>
          <link href="/global.css" rel="stylesheet"></link>
        </Head>
        <Navigation />
        <main className="container">{children}</main>
        <Footer />
      </>
    )

}