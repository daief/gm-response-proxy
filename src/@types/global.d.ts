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
/**
 * @see https://www.tampermonkey.net/documentation.php?ext=dhdg#GM_xmlhttpRequest
 * @param opt
 */
declare function GM_xmlhttpRequest(opt: {
  url: string;
  method?: 'GET' | 'POST' | 'HEAD';
  headers?: Record<string, string>;
  data?: any;
  timeout?: number;
  onload?: (e: XMLHttpRequest) => void;
  onerror?: (e: XMLHttpRequest) => any;
}): {
  abort: () => void;
};

declare const unsafeWindow: Window & typeof globalThis;
