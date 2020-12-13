## GM Response Proxy

一款代理了请求响应的油猴脚本，可以设置请求返回的内容。

Vue3 的尝试、油猴脚本的开发尝试，简陋的功能和 UI。

插件启用后，页面左上角会出现一个小按钮，点击可打开操作面板。

`域名匹配规则` 和 `Api 匹配规则` 默认以字符串子串的形式去匹配，若头、尾是 `/` 则以正则的形式去匹配，如 `/(bilibili)|(baidu)\.com/`。

日志会直接在控制台输出。

## TODO

- [x] 支持 XHR
- [x] 支持 fetch
- [ ] 界面（Vue）异步加载
- [ ] iframe 的情况

## 笔记

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
// @match                   *://localhost*/*
// ==/UserScript==

const loop = () => {
  GM_xmlhttpRequest({
    url: 'http://127.0.0.1:7777/index.js',
    onload: e => {
      const res = e.responseText;
      if (e.status === 200 && code !== res) {
        GM_setValue('code', res);
        location.reload();
      }
    },
  });
};

setInterval(loop, 3000);

const code = GM_getValue('code');
if (code) {
  eval(code);
}
```
