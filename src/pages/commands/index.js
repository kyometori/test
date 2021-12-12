import { Link, Switch, Route } from 'react-router-dom';
import './style.css';

export default function CommandsRoute () {
  return (
    <>
      <Switch>
        <Route exact path="/commands">
          <Commands />
        </Route>
        <Route path="/commands/:thing" render={props => props.match.params.thing} />
      </Switch>
    </>
  )
}

function Commands () {
  return (
    <>
      <h1>HiZollo 的指令列表</h1>
      這個指令列表能用 <Cmd cmd="help" /> 取得，且能使用 <Cmd cmd="help [指令名稱]" /> 獲得更詳細的說明。
      <InfoTable />
    </>
  )
}

/***** Tables *****/
function InfoTable () {
  return (
    <>
      <h2>資訊</h2>
      <table className="helplist-table">
        <TableHeader />
        <CommandInfo
          cmd = "announcement"
          aliases = {['ann']}
          description = "閱讀官方公告"
        />
        <CommandInfo
          cmd="botinfo"
          description = "查看機器人資訊"
        />
      </table>
    </>
  )
}
/**/


/***** Utils *****/
function Cmd (props) {
  return <code>z!{props.cmd}</code>
}

function TableHeader () {
  return (
    <tr>
      <td class="helplist-header"><strong>指令</strong></td>
      <td class="helplist-header"><strong>替代指令</strong></td>
      <td class="helplist-header"><strong>指令說明</strong></td>
      <td class="helplist-header"><strong>範例</strong></td>
    </tr>
  )
}

function CommandInfo (props) {
  let outputAliases = '';
  let outputUsage = '';
  if (!props.aliases?.length) outputAliases = '-'
  else for (const alias of props.aliases)
    outputAliases += `<code>z!${alias}</code><br />`;

  if (!props.usage?.length) outputUsage = '-'
  else for (const usage of props.usage)
    outputUsage += `<code>z!${props.cmd} ${usage}</code><br />`;

  return (
    <tr>
      <td><Cmd cmd={props.cmd} /></td>
      <td dangerouslySetInnerHTML={{
        __html: outputAliases
      }}></td>
      <td>{props.description}</td>
      <td dangerouslySetInnerHTML={{
        __html: outputUsage
      }}></td>
    </tr>
  )
}
/**/
