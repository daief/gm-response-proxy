import { cache, isMatchUrl, vmCtx } from '@/common';
import { Store } from '@/data';

function proxyRes(response: Response) {
  const ruleSet = Store.findCurrentSet();
  const matchedRule = ruleSet.rules.find(it =>
    isMatchUrl(it.apiTest, response.url)
  );

  return matchedRule?.response;
}

function log({ method, url, status, response }: any) {
  GM_log(`❗️ [fetch] Response is proxyed:\n`);
  console.table({
    method,
    url,
    status,
    'proxyed response': response,
  });
}

if (typeof Response !== 'undefined') {
  const nativeFetch = vmCtx.fetch;
  const nativeJson = Response.prototype.json;
  const nativeText = Response.prototype.text;

  Response.prototype.json = async function (this: Response, ...args) {
    const nativeRes = await nativeJson.apply(this, args);
    const payload = cache.get(this);

    if (payload?.proxyedResponse) {
      log({
        method: payload.method,
        url: this.url,
        status: this.status,
        response: payload.proxyedResponse,
      });
      return JSON.parse(payload.proxyedResponse);
    }

    return nativeRes;
  };

  Response.prototype.text = async function (this: Response, ...args) {
    const nativeRes = await nativeText.apply(this, args);
    const payload = cache.get(this);

    if (payload?.proxyedResponse) {
      log({
        method: payload.method,
        url: this.url,
        status: this.status,
        response: payload.proxyedResponse,
      });
      return payload.proxyedResponse;
    }

    return nativeRes;
  };

  vmCtx.fetch = async function (
    input: RequestInfo,
    init?: RequestInit,
    ...rest: any[]
  ) {
    let method = 'GET';
    if (input instanceof Request) {
      method = input.method;
    } else {
      method = init?.method || method;
    }

    const res: Response = await nativeFetch.apply(this, [input, init, ...rest]);

    const proxyedResponse = proxyRes(res);

    cache.set(res, {
      method,
      url: res.url,
      proxyedResponse,
    });

    return res;
  };
}
