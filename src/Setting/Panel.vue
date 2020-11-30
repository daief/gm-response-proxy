<template>
  <div v-show="show" class="root" @click.self="show = false">
    <div class="container">{{ state.matchedSetList.length }}1</div>
  </div>
</template>

<script lang="ts">
import { ISet } from '@/data';
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  data() {
    return {
      show: false,
    };
  },
  setup() {
    const state = reactive<{
      matchedSetList: ISet[];
    }>({
      matchedSetList: [],
    });

    return {
      state,
    };
  },
});
</script>

<style scoped lang="less">
.root {
  overflow: hidden auto;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  outline: none;
  position: fixed;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.2);
}
.container {
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
</style>
