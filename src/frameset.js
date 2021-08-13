import { Link } from 'react-router-dom';
import switchButton from './img/menu.png';
import wordmark from './img/wordmark.png';
import { Nav, Content } from './main.js';

function HeaderLink(props) {
  return (
    <span className={`header-link ${props.classes?.join(' ') ?? ''}`}>
      <Link to={props.url}>
        {props.text}
      </Link>
    </span>
  );
}

function Switch() {
  return (
    <div id='switch'>
      <img src={switchButton} />
    </div>
  );
}

function Wordmark() {
  return (
    <div id='wordmark' className='pc-only'>
      <Link to="/"><img src={wordmark} /></Link>
    </div>
  );
}

function HeaderLinks() {
  return (
    <div id='header-links'>
      <HeaderLink classes={['width-643-only', 'width-295-only']} url='/' text='回主頁' />
      <HeaderLink classes={['width-350-only']} url='/dst' text="DST" />
      <HeaderLink url='/invite' text='邀請機器人' />
      <HeaderLink url='/server' text='支援伺服器' />
      <HeaderLink classes={['width-420-only']} url='/source' text='網站源碼' />
    </div>
  );
}

export function Header() {
  return (
    <header>
      <Switch />
      <Wordmark />
      <HeaderLinks />
    </header>
  );
}

export function Main() {
  return (
    <div id="main">
      <Nav />
      <Content />
    </div>
  );
}
