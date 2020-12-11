<template>
  <div v-show="show" :class="cls" @click.self="close">
    <div :class="`${cls}--container`">
      <Button type="primary" :onClick="handleAdd">+</Button>
      <br />
      <div
        v-for="(it, idx) in state.matchedSetList"
        :key="idx"
        :class="`${cls}--set-wrap`"
      >
        <div>
          <label>domainTest:</label>
          <input :value="it.domainTest" />
          <Button type="primary" :onClick="() => handleAddRule(idx)">
            Add rule
          </Button>
        </div>

        <hr />

        <div v-for="(rule, idx2) in it.rules" :key="idx2">
          <div>
            <label>rule-{{ idx2 }}:</label>
            <div>
              apiTest: <input v-model="rule.apiTest" style="width: 300px" />
            </div>
            <div>response: <textarea v-model="rule.response" /></div>
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
      handleAdd: () => {
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
    min-height: 360px;
    max-width: 100%;
    width: 720px;
  }

  &--set-wrap {
    border: @color5 1px solid;
    border-radius: 4px;
    margin: 10px;
    padding: 16px;

    & + & {
      margin-top: 10px;
    }
  }
}
</style>
