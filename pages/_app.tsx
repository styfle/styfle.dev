import { AppProps } from 'next/app';
import Router from 'next/router';
import '../styles/global.css';
import { pageview } from '../utils/gtag';

Router.events.on('routeChangeComplete', url => pageview(url));

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
