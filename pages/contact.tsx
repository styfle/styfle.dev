import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout title="Contact">
      <h1>First Contact 🖖</h1>
      <picture>
        <source
          srcSet="https://res.cloudinary.com/ceriously/image/upload/v1589072884/blog/star-trek-kirk.webp"
          type="image/webp"
        />
        <source
          srcSet="https://res.cloudinary.com/ceriously/image/upload/v1589072884/blog/star-trek-kirk.jpg"
          type="image/jpeg"
        />
        <img
          alt="Star Trek Kirk"
          src="https://res.cloudinary.com/ceriously/image/upload/v1589072884/blog/star-trek-kirk.jpg"
        />
      </picture>
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
