export function getOgImage(url: string) {
  if (url.startsWith('https:')) {
    return url;
  }
  let origin: string;
  if (process.env.VERCEL_ENV === 'production') {
    origin = 'https://styfle.dev';
  } else if (process.env.VERCEL_URL) {
    origin = `https://${process.env.VERCEL_URL}`;
  } else {
    origin = 'http://localhost:3000';
  }
  return `${origin}${url}`;
}
