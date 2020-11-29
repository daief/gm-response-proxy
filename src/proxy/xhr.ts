import { cache, safeParse } from '@/common';
import { Store } from '@/data';

const originalOpen = XMLHttpRequest.prototype.open;
const originalSend = XMLHttpRequest.prototype.send;

XMLHttpRequest.prototype.open = function (...args: any[]) {
  cache.set(this, {
    method: args[0],
    url: args[1],
  });
  return originalOpen.apply(this, args);
};

XMLHttpRequest.prototype.send = function (
  this: XMLHttpRequest,
  ...args: any[]
) {
  this.addEventListener(
    'readystatechange',
    function () {
      const payload = cache.get(this);

      if (!payload) {
        return;
      }

      const ruleSet = Store.findCurrentSet();
      const matchedRule = ruleSet.rules.find(it =>
        payload.url.includes(it.apiTest)
      );

      if (matchedRule && matchedRule.response && this.readyState === 3) {
        Object.defineProperty(this, 'response', {
          writable: true,
        });
        Object.defineProperty(this, 'responseText', {
          writable: true,
        });

        // @ts-ignore
        this.response = matchedRule.response;
        // @ts-ignore
        this.responseText = matchedRule.response;

        GM_log(
          `❗️ Response is proxyed:\n`,
          `${payload.method} ${payload.url}\n`,
          safeParse(matchedRule.response)
        );
      }
    },
    {
      capture: true,
    }
  );
  return originalSend.apply(this, args);
};
