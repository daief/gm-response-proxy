import './proxy/xhr';
import './global.less';

// TODO change to async
import { render } from './SettingPanel';
// import(/* webpackChunkName: 'setting-panel' */ './SettingPanel');

let handler: any;
let isDrag = false;
let isMove = false;
let tX = 0;
let tY = 0;
let elRect: DOMRect | null = null;

window.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('div');
  el.innerText = '设置';
  el.className = 'response-proxy-page-root-fixed-button';

  function onClickEl(_e: MouseEvent) {
    if (isMove) {
      return;
    }
    if (!handler) {
      handler = render(elForMount);
      handler.$root.$watch('show', (newVal: boolean) => {
        el.classList[newVal ? 'add' : 'remove']('hidden');
      });
    }

    handler.open();
  }

  el.addEventListener('mousedown', e => {
    isDrag = true;
    isMove = false;
    elRect = el.getBoundingClientRect();
    tX = e.clientX - elRect.left;
    tY = e.clientY - elRect.top;
  });

  window.addEventListener('mouseup', async e => {
    isDrag = false;
    if (isMove) {
      isMove = false;
      return;
    }
    // mock click event
    if (e.target === el) {
      await onClickEl(e);
    }
  });

  window.addEventListener('mousemove', e => {
    isMove = true;
    if (!isDrag) {
      return;
    }

    e.preventDefault();

    let left = e.clientX - tX;
    left = Math.min(left, window.innerWidth - elRect!.width);
    left = Math.max(left, 0);

    let top = e.clientY - tY;
    top = Math.min(top, window.innerHeight - elRect!.height);
    top = Math.max(top, 0);

    el.style.left = left + 'px';
    el.style.top = top + 'px';
  });

  const elForMount = document.createElement('div');

  document.body.appendChild(el);
  document.body.appendChild(elForMount);
});
