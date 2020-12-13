<template>
  <div v-show="show" :class="cls" @click.self="close">
    <div :class="`${cls}--container`">
      <Button type="primary" @click="handleAddSet"> + 新增规则集合 </Button>
      <br />
      <div
        v-for="(it, idx) in state.matchedSetList"
        :key="it.id"
        :class="`${cls}--set-wrap`"
      >
        <Button
          :class="`${cls}--set-del`"
          size="small"
          shape="circle"
          @click="handleDelSet(it, i)"
        >
          X
        </Button>
        <div :class="`${cls}--set-domain-head`">
          <label>域名匹配规则（支持正则）：</label>
          <input :value="it.domainTest" :class="`${cls}--set-domain-input`" />
          <Button type="primary" @click="() => handleAddRule(idx)" size="small">
            添加 Api 规则
          </Button>
        </div>

        <hr />

        <div
          v-for="(rule, idx2) in it.rules"
          :key="rule.id"
          style="padding: 0 10px; margin-bottom: 10px"
        >
          <div>
            <label>
              Rule {{ idx2 + 1 }} ----
              <Button
                :class="`${cls}--set-del-rule`"
                size="small"
                shape="circle"
                @click="handleDelRule(rule, idx, idx2)"
              >
                X
              </Button>
            </label>
            <div>
              Api 匹配规则（仅字符串子串）：
              <br />
              <input v-model="rule.apiTest" style="width: 100%; padding: 8px" />
            </div>
            <div>
              Mock Response（仅 JSON）：
              <br />
              <textarea
                v-model="rule.response"
                rows="6"
                style="width: 100%; max-width: 100%; padding: 8px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Store } from '@/data';
import type { ISet } from '@/data';
import { defineComponent, onMounted, reactive, ref, watch } from 'vue';
import Button from '@/compts/Button.vue';
import { ns, uuid4 } from '@/common';

export default defineComponent({
  components: { Button },
  setup() {
    const state = reactive<{
      matchedSetList: ISet[];
    }>({
      matchedSetList: [],
    });

    onMounted(() => {
      state.matchedSetList = Store.getMatchedSetList();
    });

    watch(
      () => state.matchedSetList,
      () => {
        Store.updateSetList(state.matchedSetList);
      },
      { deep: true }
    );

    const show = ref(false);

    return {
      cls: ns('root'),
      state,
      show,
      open: () => {
        show.value = true;
      },
      close: () => {
        show.value = false;
      },
      handleAddSet: () => {
        state.matchedSetList.unshift({
          domainTest: location.hostname,
          rules: [],
          id: uuid4(),
        });
      },
      handleAddRule: (i: number) => {
        state.matchedSetList[i].rules.push({
          id: uuid4(),
          apiTest: '',
          response: '',
          disabled: false,
        });
      },
      handleDelSet: (item: ISet) => {
        if (confirm('是否删除该集合，包括其下所有 Api 配置？')) {
          Store.deleteSets([item.id]);
          state.matchedSetList = state.matchedSetList.filter(it => it !== item);
        }
      },
      handleDelRule: (item: any, setIdx: number, _ruleIdx: number) => {
        state.matchedSetList[setIdx].rules = state.matchedSetList[
          setIdx
        ].rules.filter(it => it !== item);
      },
    };
  },
});
</script>

<style scoped lang="less">
.@{prefix}__root {
  overflow: hidden auto;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  outline: none;
  position: fixed;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.65);

  &--container {
    position: absolute;
    left: 50%;
    box-sizing: border-box;
    pointer-events: auto;
    top: 40%;
    transform: translate(-50%, -40%);
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 24px 0 rgba(102, 102, 102, 0.08);
    height: 640px;
    max-height: 100%;
    max-width: 100%;
    width: 720px;

    overflow-y: auto;
  }

  &--set-wrap {
    border: @color5 1px solid;
    border-radius: 4px;
    margin: 15px 30px;
    padding: 16px;
    position: relative;
  }

  &--set-del {
    position: absolute;
    top: -12px;
    right: -12px;
  }

  &--set-domain-input {
    width: 300px;
    margin-right: 10px;
  }

  &--set-domain-head {
    height: 40px;
    display: flex;
    align-items: center;
  }
}
</style>
