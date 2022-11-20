import Image from 'next/image';
import Link from 'next/link';
import Avatar from 'public/images/blog/ceriously-flat-glow.jpg';
import style from 'styles/index.module.css';

export default function Home() {
  return (
    <>
      <div className="main-content">
        <div className={style.avatar}>
          <Image src={Avatar} placeholder="blur" width="200" height="200" alt="styfle" priority />
        </div>
        <p className={style.p}>
          My name is Steven and I&apos;m a{' '}
          <Link href="/blog/software-shepherd">
            Software <s>Engineer</s> Shepherd
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
    </>
  );
}
