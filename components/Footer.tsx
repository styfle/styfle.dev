import style from 'styles/footer.module.css';

const Footer = () => (
  <footer>
    <div className="container">
      <div className={style.flex}>
        <div>
          <a
            className={style.a}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/styfle"
            title="GitHub"
          >
            <svg className={style.social} viewBox="0 0 64 64">
              <g className="social-svg-background">
                <circle cx="32" cy="32" r="31"></circle>
              </g>
              <g className="social-svg-icon">
                <path d="M32,16c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2 c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3 c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5c3.1-2.1,4.4-1.6,4.4-1.6 c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4 c0,0.4,0.3,0.9,1.1,0.8C43.4,45.1,48,39.1,48,32C48,23.2,40.8,16,32,16z"></path>
              </g>
              <g className="social-svg-mask" style={{ fill: '#24292e' }}>
                <path d="M0,0v64h64V0H0z M37.1,47.2c-0.8,0.2-1.1-0.3-1.1-0.8c0-0.5,0-2.3,0-4.4c0-1.5-0.5-2.5-1.1-3 c3.6-0.4,7.3-1.7,7.3-7.9c0-1.7-0.6-3.2-1.6-4.3c0.2-0.4,0.7-2-0.2-4.2c0,0-1.3-0.4-4.4,1.6c-1.3-0.4-2.6-0.5-4-0.5 c-1.4,0-2.7,0.2-4,0.5c-3.1-2.1-4.4-1.6-4.4-1.6c-0.9,2.2-0.3,3.8-0.2,4.2c-1,1.1-1.6,2.5-1.6,4.3c0,6.1,3.7,7.5,7.3,7.9 c-0.5,0.4-0.9,1.1-1,2.1c-0.9,0.4-3.2,1.1-4.7-1.3c0,0-0.8-1.5-2.5-1.6c0,0-1.6,0-0.1,1c0,0,1,0.5,1.8,2.3c0,0,0.9,3.1,5.4,2.1 c0,1.3,0,2.3,0,2.7c0,0.4-0.3,0.9-1.1,0.8C20.6,45.1,16,39.1,16,32c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16 C48,39.1,43.4,45.1,37.1,47.2z"></path>
              </g>
            </svg>
          </a>
          <a
            className={style.a}
            target="_blank"
            rel="noreferrer"
            href="https://www.npmjs.com/~styfle"
            title="NPM"
          >
            <svg className={style.social} viewBox="0 0 64 64">
              <g className="social-svg-background">
                <circle cx="32" cy="32" r="31"></circle>
              </g>
              <g className="social-svg-icon">
                <path d="M18.9,20v25.6H32V25.5h7.5V46h5.6V20H18.9z"></path>
              </g>
              <g className="social-svg-mask" style={{ fill: '#cb3837' }}>
                <path d="M68,0v68H0V0H68z M18.9,20v25.6H32V25.5h7.5V46h5.6V20H18.9z"></path>
              </g>
            </svg>
          </a>
          <a
            className={style.a}
            target="_blank"
            rel="noreferrer"
            href="https://stackoverflow.com/users/266535/styfle"
            title="StackOverflow"
          >
            <svg
              className={style.social}
              style={{ backgroundColor: '#de862b' }}
              viewBox="-13 -13 50 50"
            >
              <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z"></path>
            </svg>
          </a>
          <a
            className={style.a}
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/@styfle"
            title="Medium"
          >
            <svg className={style.social} viewBox="0 0 64 64">
              <g className="social-svg-background">
                <circle cx="32" cy="32" r="31"></circle>
              </g>
              <g className="social-svg-icon">
                <path d="M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z"></path>
              </g>
              <g className="social-svg-mask" style={{ fill: '#02b875' }}>
                <path d="M0,0v64h64V0H0z M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z"></path>
              </g>
            </svg>
          </a>
          <a
            className={style.a}
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/styfle"
            title="Twitter"
          >
            <svg className={style.social} viewBox="0 0 64 64">
              <g className="social-svg-background">
                <circle cx="32" cy="32" r="31"></circle>
              </g>
              <g className="social-svg-icon">
                <path d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"></path>
              </g>
              <g className="social-svg-mask" style={{ fill: '#00bbed' }}>
                <path d="M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z"></path>
              </g>
            </svg>
          </a>
          <a
            className={style.a}
            target="_blank"
            rel="noreferrer"
            href="https://keybase.io/styfle"
            title="Keybase"
          >
            <svg
              className={style.social}
              viewBox="-10 -10 45 45"
              style={{ backgroundColor: '#33a0ff' }}
            >
              <path d="M10.446 21.371c0 .528-.428.953-.954.953-.525 0-.954-.425-.954-.953 0-.526.428-.954.953-.954.524 0 .951.431.951.955m5.922-.001c0 .528-.428.953-.955.953-.526 0-.952-.425-.952-.953 0-.526.423-.954.949-.954s.954.431.954.955"></path>
              <path d="M20.904 12.213l-.156-.204c-.046-.06-.096-.116-.143-.175-.045-.061-.094-.113-.141-.169-.104-.12-.209-.239-.319-.359l-.076-.08-.091-.099-.135-.131c-.015-.018-.032-.034-.05-.053-1.16-1.139-2.505-1.986-3.955-2.504l-.23-.078c.012-.027.024-.055.035-.083.41-1.064.367-2.223-.12-3.255-.491-1.035-1.356-1.8-2.438-2.16-.656-.216-1.23-.319-1.711-.305-.033-.105-.1-.577.496-1.848L10.663 0l-.287.399c-.33.455-.648.895-.945 1.328-.328-.345-.766-.552-1.245-.58L6.79 1.061h-.012c-.033-.003-.07-.003-.104-.003-.99 0-1.81.771-1.87 1.755l-.088 1.402v.003c-.061 1.029.727 1.915 1.755 1.979l1.002.061c-.065.84.073 1.62.405 2.306-1.346.562-2.586 1.401-3.66 2.484C.913 14.391.913 18.051.913 20.994v1.775l1.305-1.387c.266.93.652 1.807 1.145 2.615H5.06c-.833-1.114-1.419-2.426-1.68-3.848l1.913-2.03-.985 3.091 1.74-1.268c3.075-2.234 6.744-2.75 10.91-1.529 1.805.532 3.56.039 4.473-1.257l.104-.165c.091.498.141.998.141 1.496 0 1.563-.255 3.687-1.38 5.512h1.611c.776-1.563 1.181-3.432 1.181-5.512-.001-2.199-.786-4.421-2.184-6.274zM8.894 6.191c.123-1.002.578-1.949 1.23-2.97.025.05.054.097.084.144.264.398.713.625 1.199.605.217-.008.605.025 1.233.232.714.236 1.286.744 1.608 1.425s.349 1.442.079 2.149c-.173.445-.454.82-.806 1.109l-.408-.502-.002-.003c-.279-.341-.694-.535-1.134-.535-.335 0-.664.117-.925.33-.334.27-.514.66-.534 1.058-1.2-.541-1.8-1.643-1.628-3.041l.004-.001zm4.304 5.11l-.519.425c-.046.036-.095.053-.146.053-.066 0-.133-.03-.177-.085l-.111-.135c-.083-.1-.067-.25.034-.334l.51-.42-1.055-1.299c-.109-.133-.091-.33.044-.436.058-.048.126-.072.194-.072.091 0 .181.038.24.113l2.963 3.645c.109.135.09.33-.042.436-.039.029-.082.053-.126.063-.023.006-.045.009-.07.009-.09 0-.178-.04-.24-.113l-.295-.365-1.045.854c-.046.037-.1.055-.154.055-.068 0-.139-.03-.186-.09l-.477-.579c-.082-.102-.068-.252.035-.336l1.051-.857-.426-.533-.002.001zM7.753 4.866l-1.196-.075c-.255-.015-.45-.235-.435-.488l.09-1.401c.014-.245.216-.436.461-.436h.024l1.401.091c.123.006.236.06.317.152.083.094.123.21.116.336l-.007.101c-.32.567-.585 1.134-.773 1.72h.002zm12.524 11.481c-.565.805-1.687 1.081-2.924.718-3.886-1.141-7.396-.903-10.468.701l1.636-5.123-5.291 5.609c.099-3.762 2.453-6.966 5.758-8.311.471.373 1.034.66 1.673.841.16.044.322.074.48.102-.183.458-.119.997.21 1.407l.075.09c-.172.45-.105.975.221 1.374l.475.582c.266.325.659.513 1.079.513.321 0 .635-.111.886-.314l.285-.232c.174.074.367.113.566.113.113 0 .222-.01.33-.035.218-.05.424-.15.598-.291.623-.51.72-1.435.209-2.06l-1.67-2.056c.145-.117.281-.244.408-.381.135.037.271.078.4.12.266.097.533.198.795.315 1.005.445 1.954 1.1 2.771 1.897.029.03.059.055.085.083l.17.175c.038.039.076.079.111.12.079.085.16.175.239.267l.126.15c.045.053.086.104.13.16l.114.15c.04.051.079.102.117.154.838 1.149.987 2.329.404 3.157v.005z"></path>
              <path d="M7.719 4.115l-.835-.051.053-.835.834.051-.052.835z"></path>
            </svg>
          </a>
          <a
            className={style.a}
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/ceriously.com/"
            title="Facebook"
          >
            <svg className={style.social} viewBox="0 0 64 64">
              <g className="social-svg-background">
                <circle cx="32" cy="32" r="31"></circle>
              </g>
              <g className="social-svg-icon">
                <path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"></path>
              </g>
              <g className="social-svg-mask" style={{ fill: '#3b5998' }}>
                <path d="M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z"></path>
              </g>
            </svg>
          </a>
        </div>
        <div>
          <a className={style.a} href="https://github.com/styfle/styfle.dev">
            styfle.dev
          </a>
          &copy; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
