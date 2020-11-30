### 调试、自动刷新

起个本地服务托管 `dist`，如 `live-server --port=777`，之后在油猴脚本中写入以下代码，当源码更新后可自动刷新：

```js
// ==UserScript==
// ... 其他必要的配置
// @grant                   unsafeWindow
// @grant                   GM_setValue
// @grant                   GM_getValue
// @grant                   GM_log
// @grant                   GM_xmlhttpRequest
// @connect                 127.0.0.1
// ==/UserScript==

const code = GM_getValue('code');
if (code) {
  eval(code);
}

const loop = () => {
  GM_xmlhttpRequest({
    url: 'http://127.0.0.1:7777/index.js',
    onload: e => {
      console.log('check');
      const res = e.responseText;
      if (e.status === 200 && code !== res) {
        GM_setValue('code', res);
        location.reload();
      }
    },
  });
};

setInterval(loop, 3000);
```
