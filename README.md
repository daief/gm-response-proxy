## GM Response Proxy

一款代理请求（包括 XMLHttpRequest 和 fetch）响应结果的油猴脚本，即 mock 请求的响应。

yarn@berry、Vue3、油猴脚本的尝试，简陋的功能和 UI。

插件启用后，页面左上角会出现一个小按钮，点击即可唤起操作面板。

`域名匹配规则` 和 `Api 匹配规则` 默认以字符串子串的形式去匹配，若头、尾均是 `/` 则以正则的形式去匹配，如 `/(bilibili)|(baidu)\.com/` 会被实例化为正则表达式再去进行匹配。

日志会直接在控制台输出。

Greasyfork URL：<https://greasyfork.org/zh-CN/scripts/418749-response-proxy>

## TODO

- [x] 支持 XHR
- [x] 支持 fetch
- [ ] 界面（Vue 模块）异步加载，预计能极大减少脚本初始化大小，提升体验
- [ ] 界面优化
- [x] iframe 的情况。
  - 所有 iframe 都会注入脚本
  - 只在顶层 iframe 展示操作按钮，列出 iframe 匹配的规则
- [ ] 规则开关
- [ ] 国际化（大概）

## Note

### Document

- [tampermonkey documentation](https://www.tampermonkey.net/documentation.php)

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
