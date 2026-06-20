import 'styles/global.css';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Prevent usage of dynamic functions such
// as `cookies()`,  and changes `dynamicParams` to false.
// This is equivalent to getStaticProps() in Pages Router.
export const dynamic = 'force-static';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process?.env?.GA_ID;
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <Navigation />
        <main className="container">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
