import { NAMESPACE } from '@/common';

export interface IPrxyRule {
  disabled: boolean;
  apiTest: string;
  response: string;
}

export interface ISet {
  domainTest: string;
  rules: IPrxyRule[];
}

// const _key = (k: string) => `${NAMESPACE}_${k}`;
const KEY_SET = 'all_set';

export const Store = {
  NAMESPACE,
  getSetList(): ISet[] {
    let res = GM_getValue(KEY_SET);
    res = Array.isArray(res) ? res : [];
    return res;
  },
  getMatchedSetList(): ISet[] {
    return Store.getSetList().filter(it =>
      new RegExp(it.domainTest, 'ig').test(location.host)
    );
  },
  findCurrentSet(): ISet {
    const ruleSet = Store.getSetList().find(it =>
      new RegExp(it.domainTest, 'ig').test(location.host)
    ) || {
      domainTest: location.host,
      rules: [],
    };
    return ruleSet;
  },
};
