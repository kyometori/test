import { useEffect } from 'react';
import './style.css'

export default function Changelog() {
  let lastOpened;
  useEffect(() => {
    document.querySelectorAll(".cl-wrapper-title").forEach(title => {
      title.addEventListener('click', e => {
        const content = e.target.parentElement.nextElementSibling;
        if (content.clientHeight === 0) {
          if (!!lastOpened) lastOpened.style.maxHeight = 0;
          content.style.maxHeight = content.scrollHeight + 'px';
          lastOpened = content;
        }
        else {
          content.style.maxHeight = 0;
        }
      })
    })
  });

  return (
    <>
      <h1>HiZollo 的更新日誌</h1>
      <h2>beta 0.11.x </h2>
      <div className="flex">
        <Beta0_11_0a />
        <Beta0_11_0 />
      </div>
    </>
  )
}

function Beta0_11_0a() {
  return (
    <table class="cl-wrapper">
      <tr class="cl-wrapper-title"><th>beta 0.11.0a</th></tr>
      <tr class="cl-wrapper-content"><td><strong class="cl-wrapper-date">2021 年 10 月 11 日</strong><ul>
        <li>修復了一些 bug</li>
        <li>訊息指令 <code>z!calc</code> 無法正確計算的問題已經被修復</li>
        <li>新增指令：<code>confession</code></li>
        <ul>
          <li>你可以透過此指令向伺服器中的某位使用者告白</li>
        </ul>
      </ul></td></tr>
    </table>
  );
}

function Beta0_11_0() {
  return (
    <table class="cl-wrapper">
      <tr class="cl-wrapper-title"><th>beta 0.11.0</th></tr>
      <tr class="cl-wrapper-content"><td><strong class="cl-wrapper-date">2021 年 10 月 3 日</strong><ul>
        <li>修復了一些 bug</li>
        <li>HiZollo 正式進入斜線時代！所有指令都有斜線版本了</li>
        <ul>
          <li>因為輸入斜線指令時 Discord 會自動幫你尋找匹配指令，所以斜線指令都不會有替代用法</li>
        </ul>
        <li>因為斜線指令的某些特性，會讓它的功能跟原本的訊息指令有一些不同：</li>
        <ul>
          <li>當你輸入了無效的參數或發生執行錯誤時，跳出的錯誤訊息只有自己看得到</li>
          <li>為了節省輸入時間，對於每個 <code>/diep</code> 與 <code>/osu</code> 的群組指令，都有一個以 \`/z\` 開頭的捷徑用法</li>
          <li>為了避免一些問題，目前 <code>/music</code> 群組指令還不會有斜線版本</li>
          <li><code>/avatar</code> 與 <code>/fact</code> 指令現在只接受 1 個參數，而不是像過去一樣不限數量</li>
          <li><code>/choose</code> 與 <code>/vote</code> 現在只接受最多 5 個選項，而不是像過去一樣不限數量</li>
          <li><code>/deletemsg</code> 控制是否在刪除訊息後提示的參數被移除了，現在永遠都會顯示提示，但只有使用者自己看得到</li>
          <li><code>/gomoku</code> 和 <code>/tictactoe</code> 的參數統一了，第一個參數是指定對手，第二個參數則是指定自己是否先攻</li>
          <li><code>/minecraft</code> 因為仍在修復中，所以並不會出現在指令列表裡</li>
          <li><code>/say</code> 無法回覆指定訊息或傳送貼貼圖</li>
          <li>還有其他小改動，就請大家慢慢探索吧</li>
        </ul>
        <li>以下是斜線與訊息指令都有的改動：</li>
        <ul>
          <li><code>8ball</code> 與 <code>throwball</code> 多了更多的回應</li>
          <li><code>ban</code>、<code>bug</code>、<code>kick</code>、<code>suggest</code>、<code>unban</code> 五個指令在真正執行功能前會先詢問是否真的要執行</li>
          <li><code>calc</code> 算式中的空格不會再被系統吃掉了</li>
          <li><code>bug</code>、<code>suggest</code> 現在有 600 秒的冷卻時間，而回報工單的顏色與排版也被改動了</li>
        </ul>
        <li>而原本的訊息指令也有一些改動：</li>
        <ul>
          <li><code>z!vote</code> 多了 <code>z!poll</code> 的替代用法</li>
        </ul>
      </ul></td></tr>
    </table>
  );
}
