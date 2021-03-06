import { Switch, Route } from 'react-router-dom';
import Redirect from './redirects.js';
import Mainpage from './pages/mainpage/index.js';
import Commands from './pages/commands/index.js';
import Changelog from './pages/changelog/index.js';

export default function Content(props) {
  return (
    <div id="content">
      <Switch>
        <Route exact path='/'>
          <Mainpage />
        </Route>
        <Route path='/commands'>
          <Commands />
        </Route>
        <Route exact path='/changelog'>
          <Changelog />
        </Route>
        <Route exact path='/dst'>
          <Redirect url='https://discordservers.tw/bots/584677291318312963' />
        </Route>
        <Route exact path='/invite'>
          <Redirect url='https://hizollo.ddns.net/invite' />
        </Route>
        <Route exact path='/server'>
          <Redirect url='https://discord.com/invite/xUXTrYG2MZ' />
        </Route>
        <Route exact path='/source'>
          <Redirect url='https://github.com/kyometori/test' />
        </Route>
        <Route path='/:thing' render={props => props.match.params.thing} />
        <Route path='/'>
        (´・ω・`)
        </Route>
      </Switch>
    </div>
  );
}
