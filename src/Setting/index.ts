import { createApp } from 'vue';
import Root from './Root.vue';

export function render(el: any) {
  const vm = createApp(Root);

  const $root = vm.mount(el);

  return {
    $root,
    open: () => {
      return ($root as any).open();
    },
    close: () => {
      return ($root as any).close();
    },
  };
}
