<template>
  <div>dsds {{ val }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      val: 1,
    };
  },
});
</script>

<style scoped lang="less">
.div {
  color: red;
}
</style>
