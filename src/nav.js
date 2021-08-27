import { Link } from 'react-router-dom';
import mpIcon from './img/nav-icons/mainpage.png';
import annIcon from './img/nav-icons/announcement.png';
import cmdIcon from './img/nav-icons/command.png';
import tutorialIcon from './img/nav-icons/tutorial.png';
import changelogIcon from './img/nav-icons/changelog.png';

function NavLink(props) {
  return (
    <Link to={`${props.url}`}>
      <div className='nav-link'>
        <div className='nav-link-icon'>
          <img src={props.icon} />
        </div>
        <div className='nav-link-text'>
          {props.text}
        </div>
      </div>
    </Link>
  );
}

export default function Nav() {
  return (
    <div id="nav" className='pc-only'>
      <NavLink icon={mpIcon} url='/' text='首頁' />
      <NavLink icon={annIcon} url='/announcement' text='最新公告'/>
      <NavLink icon={cmdIcon} url='/commands' text='指令列表'/>
      <NavLink icon={tutorialIcon} url='/tutorials' text='使用教學'/>
      <NavLink icon={changelogIcon} url='/changelog' text='更新日誌'/>
    </div>
  )
}
