import { vmCtx } from '@/common';
import { Store } from '@/data';

const NativeXMLHttpRequest = vmCtx.XMLHttpRequest;

vmCtx.XMLHttpRequest = class extends (
  NativeXMLHttpRequest
) {
  #mockResponse: string;
  #url: string;
  #method: string;
  #proxyed: boolean = false;

  constructor() {
    super();

    ['load', 'error'].forEach(ev => {
      this.addEventListener(ev, () => {
        if (!this.#proxyed) return;

        GM_log(`❗️ [XHR] Response is proxyed:\n`);
        console.table({
          method: this.#method,
          url: this.#url,
          status: this.status,
          'proxyed response': this.#mockResponse,
        });
      });
    });
  }

  get response() {
    return this.#mockResponse || super.response;
  }

  get responseText() {
    return this.#mockResponse || super.responseText;
  }

  open(method: string, url: string): void {
    this.#method = method;
    this.#url = url;

    const ruleSet = Store.findCurrentSet();
    const matchedRule = ruleSet.rules.find(it =>
      this.#url.includes(it.apiTest)
    );

    if (matchedRule?.response) {
      this.#mockResponse = matchedRule.response;
      this.#proxyed = true;
    }

    return super.open(method, url);
  }
};
