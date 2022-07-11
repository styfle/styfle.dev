import Image from 'next/future/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import Avatar from '../public/images/blog/ceriously-flat-glow.jpg';
import style from '../styles/index.module.css';
import { useState } from 'react';

export default function Home() {
  const [pulse, setPulse] = useState(false);

  return (
    <Layout title="Home">
      <div className="main-content">
        <div className={`${style.avatar} ${pulse ? style.pulse : ''}`}>
          <Image
            src={Avatar}
            className={style.round}
            onLoadingComplete={() => setPulse(true)}
            placeholder="blur"
            width="200"
            height="200"
            alt="styfle"
            priority
          />
        </div>
        <p className={style.p}>
          My name is Steven and I&apos;m a{' '}
          <Link href="/blog/software-shepherd">
            <a>
              Software <s>Engineer</s> Shepherd
            </a>
          </Link>{' '}
          with a passion for building open source tools. I currently work for{' '}
          <a href="https://vercel.com">Vercel</a> building the best cloud deployment experience in
          the world. On the interwebz, I go by <a href="https://github.com/styfle">styfle</a>.
        </p>
        <p className={style.p}>
          I think open source software is a great way to collaborate with people from all over the
          world and make a global impact. If you are using code I&apos;ve written, I&apos;d love to
          hear about it!
        </p>
      </div>
    </Layout>
  );
}
