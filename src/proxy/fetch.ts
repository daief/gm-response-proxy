import { cache, safeParse, vmCtx } from '@/common';
import { Store } from '@/data';

const originalFetch = vmCtx.fetch;
const originalJson = Response.prototype.json;
const originalText = Response.prototype.text;

function proxyRes(response: Response) {
  const ruleSet = Store.findCurrentSet();
  const matchedRule = ruleSet.rules.find(it =>
    response.url.includes(it.apiTest)
  );

  const res = matchedRule?.response;
  const payload = cache.get(response);

  if (res) {
    GM_log(
      `❗️ [fetch] Response is proxyed:\n`,
      `${payload?.method || ''} ${response.url}\n`,
      safeParse(res)
    );
  }

  return res;
}

if (typeof Response !== 'undefined') {
  Response.prototype.json = async function (this: Response, ...args) {
    const nativeRes = await originalJson.apply(this, args);
    const res = proxyRes(this);
    if (res) {
      try {
        return JSON.parse(res);
      } catch (error) {
        console.warn(
          `❌ Error when parse proxy response for [${this.url}]. Use original result.`
        );
        return nativeRes;
      }
    }
  };

  Response.prototype.text = async function (this: Response, ...args) {
    const nativeRes = await originalText.apply(this, args);
    const res = proxyRes(this);
    if (res) {
      return res;
    }
    return nativeRes;
  };

  vmCtx.fetch = async function (...args) {
    const res: Response = await originalFetch.apply(this, args);
    cache.set(res, {
      method: args[1]?.method || 'GET',
      url: res.url,
    });
    return res;
  };
}
