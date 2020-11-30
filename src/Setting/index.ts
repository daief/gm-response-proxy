import { createApp } from 'vue';
import Panel from './Panel.vue';

export function render(el: any) {
  const vm = createApp(Panel);
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
