import Image from 'next/image';
import Kirk from 'public/images/blog/star-trek-kirk.jpg';
import { getOgImage } from 'utils/og-image';

export async function generateMetadata() {
  const title = 'Contact';
  const description = 'Are you trying to contact styfle? You found the right place!';
  const ogImage = getOgImage('/images/blog/star-trek-kirk.jpg');

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://styfle.dev/contact`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage,
    },
  };
}

export default function Contact() {
  return (
    <>
      <h1>First Contact 🖖</h1>
      <Image src={Kirk} placeholder="blur" width="720" height="360" alt="Star Trek Kirk" quality={80} />
      <p>Hey thanks for reaching out! You can contact me in the following ways:</p>
      <ul>
        <li>
          Public Message -{' '}
          <a className="green-link" href="https://twitter.com/styfle">
            Tweet
          </a>{' '}
          or{' '}
          <a className="green-link" href="https://github.com/styfle/styfle.dev/issues">
            create an issue
          </a>
          .
        </li>
        <li>
          Private Message - Direct Message on{' '}
          <a className="green-link" href="https://twitter.com/styfle">
            Twitter
          </a>{' '}
          or{' '}
          <a className="green-link" href="https://keybase.io/styfle">
            Keybase
          </a>
          .
        </li>
      </ul>
      <p>
        You can also send an email to me <code>@styfle.dev</code> if you&apos;re into that kind of
        stuff.
      </p>
    </>
  );
}
