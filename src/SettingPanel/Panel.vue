<template>
  <div v-if="show" @click="show = false">dsds {{ val }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      val: 1,
      show: false,
    };
  },
});
</script>

<style scoped lang="less">
div {
  color: red;
}
</style>
