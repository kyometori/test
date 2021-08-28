import { Link } from 'react-router-dom';
import './style.css';

export default function Mainpage() {
  return (
    <>
      <h1>HiZollo 聊天機器人</h1>
      <Description />
      <Basic />
      <Games />
      當然，HiZollo 的功能可不僅於此，快<a href="/invite" target="_blank">點擊此處</a>來邀請 HiZollo 到你的伺服器中吧！
      <Partner />
      <Chat />
      <Update />
      <ComingSoon />
      <Report />
      <Fixing />
      <Blank />
    </>
  );
}

/** 首頁片段 **/

function Description() {
  return (
    <>
      在此推薦：<b>HiZollo</b>！他是一個多功能的聊天機器人，有了他，你可以管理伺服器中的身分組，也能獲取神奇的小知識，或在聊天的過程中偶然發現隱藏指令……？你可以使用 <code>z!help</code> 或到<Link to='/commands'>這裡</Link>來查看 HiZollo 的指令列表，也可以點擊<Link to='/tutorials'>這裡</Link>來查看 HiZollo 的使用教學！
    </>
  )
}

function Basic() {
  return (
    <>
      <h2>基本功能</h2>
      <ul>
        <CmdDes command='8ball' description='在你感到茫然時，拜訪神奇的 8 號球……' />
        <CmdDes command='calc' description='計算機 HiZollo 幫你解決複雜的數學算式' />
        <CmdDes command='choose' description='幫助選擇障礙患者抽出最合適的選項' />
        <CmdDes command='fact' description='讓博學多聞的 HiZollo 來告訴你天下大小事' />
        <CmdDes command='minecraft' description='讓 HiZollo 小幫手幫你把有關 Minecraft 的資訊整理好' />
        <CmdDes command='music' description='讓 DJ HiZollo 為你播放精彩的樂曲' />
        <CmdDes command='say' description='命令 HiZollo 一字不差地學你說話' />
        <CmdDes command='vote' description='讓 HiZollo 幫你發起一場投票' />
        <CmdDes command='useless' description='……嗯？' />
      </ul>
    </>
  )
}

function Games() {
  return (
    <>
      <h2>迷你遊戲</h2>
      <ul>
        <CmdDes command='fliptrip' description='進行一場黑與白之間的燒腦旅程……' />
        <CmdDes command='gomoku' description='和朋友來一場簡單的五子棋遊戲' />
        <CmdDes command='tictactoe' description='你可以和你的朋友來一場經典的井字遊戲，當然 HiZollo 也值得你挑戰' />
        <li>更多迷你遊戲等待推出中……</li>
      </ul>
    </>
  )
}

function Partner() {
  return (
    <>
      <h2>合作夥伴</h2>
      <ul>
        <PartnerDes name="Diep.io 繁中維基" cmd="diep" />
        <li>不定期增加中……</li>
      </ul>
    </>
  )
}

function Chat() {
  return (
    <>
      <h2>聊天系統</h2>
      HiZollo 會偵測對話中的隻字片語，做出簡易回覆，與使用者高度互動，人機零距離
    </>
  );
}

function Update() {
  return (
    <>
      <h2>頻繁更新</h2>
      HiZollo 的開發團隊時不時會推陳出新，研究出許許多多的新功能，你可以使用 <code>z!ann</code> 查看最近的更新消息，以確保跟上我們的腳步！
    </>
  );
}

function ComingSoon() {
  return (
    <>
      <h2>即將到來</h2>
      <ul>
        <li>跨伺服器聊天室</li>
        <li>斜線指令</li>
      </ul>
    </>
  );
}

function Report() {
  return (
    <>
      <h2>回報系統</h2>
      <ul>
        <CmdDes command="bug" description="當 HiZollo 有任何問題時，歡迎使用這個指令來告訴我們" />
        <CmdDes command="suggest" description="如果你有任何好點子，也可以使用這個指令來向我們提供建議" />
      </ul>
    </>
  );
}

function Fixing() {
  return (
    <>
      <h2>下線維護</h2>
      <ul>
        <li>每個月最後一個週末為維護日，該週末 HiZollo 可能無法上線提供服務</li>
      </ul>
    </>
  );
}

/**/

/** Utils **/
function CmdDes(props) {
  return (
    <li>
      <code>z!{props.command}</code>：{props.description}
    </li>
  );
}

function PartnerDes(props) {
    return (
      <li>
        {props.name}：<Link to="/commands/diep">z!{props.cmd}</Link>
      </li>
    );
}

function Blank() {
  return (
    <div style={{height: `${50}px`}}>
    </div>
  );
}
/**/
