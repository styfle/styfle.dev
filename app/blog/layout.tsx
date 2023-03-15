export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link
        key="theme-dark"
        id="theme-dark"
        href="/themes/nord.css"
        rel="stylesheet"
        media="(prefers-color-scheme: dark)"
        //@ts-ignore
        precedence="high"
      ></link>
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link
        key="theme-light"
        id="theme-light"
        href="/themes/github.css"
        rel="stylesheet"
        media="(prefers-color-scheme: light)"
        //@ts-ignore
        precedence="high"
      ></link>
      {children}
    </>
  );
}
