export * from './utils';

export const cache = new WeakMap<
  XMLHttpRequest | Response,
  {
    method: string;
    url: string;
    [k: string]: any;
  }
>();

export const NAMESPACE = location.host;

export const PREFIX = 'gm-rp';

export const vmCtx: Window & typeof globalThis =
  typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;

export function ns(c = '') {
  return `${PREFIX}__${c}`;
}
