import './proxy/xhr';
import './global.less';

// TODO change to async
import { render } from './SettingPanel';
// import(/* webpackChunkName: 'setting-panel' */ './SettingPanel');

window.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('div');
  el.innerText = '设置';
  el.className += 'response-proxy-page-root-fixed-button';
  el.addEventListener('click', async () => {
    //
    render(el);
  });
  document.body.appendChild(el);
});
