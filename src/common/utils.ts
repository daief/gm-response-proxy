export function safeParse(str: string) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return str;
  }
}

export function isPromise(obj: any) {
  return (
    !!obj &&
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function'
  );
}

export function uuid4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function isMatchUrl(matchRule: string, url: string): boolean {
  if (/^\/.*\/$/.test(matchRule)) {
    return new RegExp(matchRule, 'ig').test(url);
  }

  return url.includes(matchRule);
}
