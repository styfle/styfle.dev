// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageview(url: string) {
  const { gtag } = window as {
    gtag: Gtag.Gtag;
  };
  const { GA_ID } = process.env;
  if (GA_ID) {
    gtag('config', GA_ID, {
      page_path: url,
    });
  }
}
