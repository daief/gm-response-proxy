import { NAMESPACE, uuid4 } from '@/common';
import values from 'lodash/values';

export interface IPrxyRule {
  id: string;
  disabled: boolean;
  apiTest: string;
  response: string;
}

export interface ISet {
  id: string;
  domainTest: string;
  rules: IPrxyRule[];
}

// const _key = (k: string) => `${NAMESPACE}_${k}`;
const KEY_SET = 'all_set';

export const Store = {
  NAMESPACE,
  getStoreObject(): Record<string, ISet> {
    return GM_getValue(KEY_SET) || {};
  },
  getSetList(): ISet[] {
    let res = values(Store.getStoreObject());
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
      id: uuid4(),
      domainTest: location.host,
      rules: [],
    };
    return ruleSet;
  },
  updateSetList(input: ISet[]) {
    const store = Store.getStoreObject();
    input.forEach(it => {
      const target = store[it.id];
      if (target) {
        return Object.assign(target, it);
      }
      store[it.id] = it;
    });
    GM_setValue(KEY_SET, store);
  },
  deleteSets(ids: string[]) {
    const store = Store.getStoreObject();
    ids.forEach(id => {
      delete store[id];
    });
    GM_setValue(KEY_SET, store);
  },
};
