export const vmCtx: Window & typeof globalThis =
  typeof unsafeWindow !== 'undefined' ? unsafeWindow : window;
