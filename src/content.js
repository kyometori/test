import { Switch, Route } from 'react-router-dom';
import Redirect from './redirects.js';

export default function Content(props) {
  return (
    <Switch>
      <Route exact path='/'>
        welcome
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
      <Route exact path='/:thing' render={props => props.match.params.thing} />
      <Route path='/'>
      (´・ω・`)
      </Route>
    </Switch>
  )
}
