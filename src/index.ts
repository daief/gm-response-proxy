import './proxy/xhr';
import './global.less';

// TODO change to async
import { render } from './SettingPanel';
// import(/* webpackChunkName: 'setting-panel' */ './SettingPanel');

let handler: any;

window.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('div');
  el.innerText = '设置';
  el.className = 'response-proxy-page-root-fixed-button';

  el.addEventListener('click', async () => {
    if (!handler) {
      handler = render(elForMount);
      handler.$root.$watch('show', (newVal: boolean) => {
        el.classList[newVal ? 'add' : 'remove']('hidden');
      });
    }

    handler.open();
  });

  const elForMount = document.createElement('div');

  document.body.appendChild(el);
  document.body.appendChild(elForMount);
});
