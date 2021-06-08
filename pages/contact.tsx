import Image from 'next/image';
import Layout from '../components/Layout';
import Kirk from '../public/images/blog/star-trek-kirk.jpg';

export default function Contact() {
  return (
    <Layout title="Contact">
      <h1>First Contact 🖖</h1>
      <Image
        src={Kirk}
        placeholder="blur"
        width="800"
        height="400"
        layout="responsive"
        alt="Star Trek Kirk"
      />
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
        You can also send an email to me <code>@styfle.dev</code> if you're into that kind of stuff.
      </p>
    </Layout>
  );
}
