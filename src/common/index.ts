export * from './utils';

export const cache = new WeakMap<
  XMLHttpRequest,
  {
    method: string;
    url: string;
  }
>();

export const NAMESPACE = location.host;
