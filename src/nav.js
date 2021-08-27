import { Link } from 'react-router-dom';
import mpIcon from './img/nav-icons/mainpage.png';
import annIcon from './img/nav-icons/announcement.png';

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
    </div>
  )
}
