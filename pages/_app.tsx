import { AppProps } from 'next/app'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (<>
        <Head>
            <title>{pageProps.title} - styfle.dev</title>
        </Head>
        <Component {...pageProps} />
    </>);
}