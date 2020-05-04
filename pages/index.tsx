import Layout from '../components/Layout'

// Avatar animation by https://codepen.io/blixt/pen/ZGwwKW
export default function Home() {
  return (<Layout title="Home">
    <style jsx>{`

    p {
      font-size: 20px;
    }

    .avatar {
      position: relative;
      height: 200px;
      width: 200px;
      margin: 60px auto;
    }

    .avatar img {
      border-radius: 9999px;
      height: 100%;
      position: relative;
      width: 100%;
      z-index: 2;
    }

    .avatar:hover img {
      border-radius: 9999px;
    }

    @keyframes cycle-colors {
      0% { border-color: rgba(0, 100%, 50%); }
      25% { border-color: hsl(90, 100%, 50%); }
      50% { border-color: hsl(180, 100%, 50%); }
      75% { border-color: hsl(270, 100%, 50%); }
      100% { border-color: hsl(360, 100%, 50%); }
    }

    @keyframes pulse {
      to {
        opacity: 0;
        transform: scale(1);
      }
    }

    .avatar::before,
    .avatar::after {
      animation: pulse 2s linear infinite;
      border: #fff solid 8px;
      border-radius: 9999px;
      box-sizing: border-box;
      content: ' ';
      height: 140%;
      left: -20%;
      opacity: .6;
      position: absolute;
      top: -20%;
      transform: scale(0.714);
      width: 140%;
      z-index: 1;
    }

    .avatar::after {
      animation-delay: 1s;
    }

    .avatar:hover::before,
    .avatar:hover::after {
      animation: pulse 1s linear infinite, cycle-colors 6s linear infinite;
    }

    .avatar:hover::after {
      animation-delay: .5s;
    }
    `}</style>
  <div className="main-content">
    <div className="avatar">
      <img alt="styfle" src="/styfle-ceriously.png" />
    </div>
    <p>My name is Steven and I'm a{" "}
        <a href="https://twitter.com/styfle/status/1083763630108217344">
          Software <s>Engineer</s> Shepherd
        </a>{" "}
        with a passion for building open source tools. I currently work for{" "}
        <a href="https://vercel.com">Vercel</a> building the best cloud
        deployment experience in the world. On the interwebz, I go by{" "}
        <a href="https://github.com/styfle">
          styfle
        </a>.
    </p>
    <p>I think open source software is a great way to collaborate with people from all over the world and make a global impact. If you are using code I've written, I'd love to hear about it!</p>
  </div>
  </Layout>);
}
