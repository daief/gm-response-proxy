import { createApp } from 'vue';
import App from './Panel.vue';

export function render(el: any) {
  createApp(App).mount(el);
}
