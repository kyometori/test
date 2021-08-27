import './redirect.css';

export default function(props) {
  window.location.replace(props.url);
  return (
    <div>
      <h1>即將跳轉頁面</h1>
      如果頁面沒有自動跳轉，請點擊<a href={props.url}>這裡</a>
    </div>
  );
}
