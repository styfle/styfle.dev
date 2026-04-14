// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageview(url: string) {
  const { gtag } = window as unknown as {
    gtag: (name: string, id: string, config: { page_path: string }) => void;
  };
  const { GA_ID } = process.env;
  if (GA_ID) {
    gtag('config', GA_ID, {
      page_path: url,
    });
  }
}
