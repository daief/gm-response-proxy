import { vmCtx } from './ctx';

export * from './utils';

export { vmCtx };

export const cache = new WeakMap<
  XMLHttpRequest | Response,
  {
    method: string;
    url: string;
    [k: string]: any;
  }
>();

export const NAMESPACE = vmCtx.location.origin;

export const PREFIX = 'gm-rp';

export function ns(c = '') {
  return `${PREFIX}__${c}`;
}
