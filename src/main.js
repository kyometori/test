import { Link, Switch, Route, Redirect } from 'react-router-dom';
import mpIcon from './img/nav-icons/mainpage.png';
import annIcon from './img/nav-icons/announcement.png';

function NavLink(props) {
  return (
    <Link to={`/test${props.url}`}>
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

export function Nav() {
  return (
    <div id="nav" className='pc-only'>
      <NavLink icon={mpIcon} url='' text='首頁' />
      <NavLink icon={annIcon} url='/announcement' text='最新公告' />
    </div>
  )
}

export function Content() {
  return (
    <Switch>
      <Route exact path='/test'>
        welcome
      </Route>
      <Route exact path='/test/invite'>
        <Redirect to={{pathname: "https://hizollo.ddns.net/invite"}} />
      </Route>
      <Route exact path='/test/server'>
        server
      </Route>
      <Route path='/test'>
      (´・ω・`)
      </Route>
    </Switch>
  )
}
