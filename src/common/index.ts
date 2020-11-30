export * from './utils';

export const cache = new WeakMap<
  XMLHttpRequest | Response,
  {
    method: string;
    url: string;
  }
>();

export const NAMESPACE = location.host;

export const vmCtx: Window & typeof globalThis =
  typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
