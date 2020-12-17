import { isMatchUrl, vmCtx } from '@/common';
import { Store } from '@/data';

const NativeXMLHttpRequest = vmCtx.XMLHttpRequest;

vmCtx.XMLHttpRequest = class extends (
  NativeXMLHttpRequest
) {
  #mockResponse: string;
  #url: string;
  #method: string;

  constructor() {
    super();

    this.addEventListener('readystatechange', e => {
      if (this.readyState !== 4) return;

      const ruleSet = Store.findCurrentSet();
      const matchedRule = ruleSet.rules.find(it =>
        isMatchUrl(it.apiTest, this.#url),
      );

      if (!matchedRule?.response) {
        return;
      }

      this.#mockResponse = matchedRule.response;

      GM_log(`❗️ [XHR] Response is proxyed:\n`);
      console.table({
        method: this.#method,
        url: this.#url,
        status: this.status,
        'proxyed response': this.#mockResponse,
      });
    });
  }

  get response() {
    return this.#mockResponse || super.response;
  }

  get responseText() {
    return this.#mockResponse || super.responseText;
  }

  open(method: string, url: string, ...rest: any[]): void {
    this.#method = method;
    this.#url = url;

    if (/^(https?:\/\/)|(\/\/)/.test(url)) {
      this.#url = url;
    } else {
      this.#url = `${location.origin}/${url.replace(/^\//, '')}`;
    }

    // @ts-ignore
    return super.open(method, url, ...rest);
  }
};
