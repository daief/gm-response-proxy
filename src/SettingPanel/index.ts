import { createApp } from 'vue';
import App from './Panel.vue';

export function render(el: any) {
  const vm = createApp(App);
  const $root = vm.mount(el);

  return {
    $root,
    open: () => {
      ($root.$data as any).show = true;
    },
    close: () => {
      ($root.$data as any).show = false;
    },
  };
}
