import { findPageOriginList, isMatchUrl, NAMESPACE, uuid4 } from '@/common';
import values from 'lodash/values';
import debounce from 'lodash/debounce';

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
    const origins = findPageOriginList();
    return Store.getSetList().filter(it =>
      origins.some(origin => isMatchUrl(it.domainTest, origin)),
    );
  },
  findCurrentSet(): ISet {
    const ruleSet = Store.getSetList().find(it =>
      new RegExp(it.domainTest, 'ig').test(NAMESPACE),
    ) || {
      id: uuid4(),
      domainTest: NAMESPACE,
      rules: [],
    };
    return ruleSet;
  },
  updateSetList: debounce((input: ISet[]) => {
    const store = Store.getStoreObject();
    input.forEach(it => {
      const target = store[it.id];
      store[it.id] = target ? Object.assign(target, it) : it;
    });
    GM_setValue(KEY_SET, store);
  }, 2000),
  deleteSetList(ids: string[]) {
    const store = Store.getStoreObject();
    ids.forEach(id => {
      delete store[id];
    });
    GM_setValue(KEY_SET, store);
  },
};
