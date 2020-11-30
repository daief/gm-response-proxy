declare module 'terser-webpack-plugin';

declare module '*.less';
declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}

declare function GM_log(...msg: any[]): void;
declare function GM_setValue(name: string, value: any): void;
declare function GM_addStyle(css: string): void;
declare function GM_getValue(name: string, defaultValue?: any): any;

declare const unsafeWindow: Window & typeof globalThis;
