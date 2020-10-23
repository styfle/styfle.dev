import Image from 'next/image';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout title="Contact">
      <h1>First Contact 🖖</h1>
      <Image src="/blog/star-trek-kirk.jpg" width={800} height={400} priority />
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
      <p>You can also find my email address in my git commits.</p>
    </Layout>
  );
}
