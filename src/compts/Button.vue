<template>
  <button
    :class="[
      cls,
      `${cls}--${type}`,
      `${cls}--size-${size}`,
      `${cls}--shape-${shape}`,
    ]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { ns } from '@/common';
import { defineComponent, ref } from 'vue';

import type { PropType } from 'vue';

export interface IButtonProps {
  type?: PropType<'primary' | 'secondary'>;
  size?: PropType<'default' | 'small'>;
  shape?: PropType<'default' | 'circle' | 'round'>;
}

export default defineComponent({
  name: 'RPButton',
  props: {
    type: {
      type: String as IButtonProps['type'],
      default: 'secondary',
    },
    size: {
      type: String as IButtonProps['size'],
      default: 'default',
    },
    shape: {
      type: String as IButtonProps['shape'],
      default: 'default',
    },
    onClick: {
      type: Function,
      default: () => null,
    },
  },
  setup(props, _ctx) {
    const innerLoading = ref(false);

    const handleClick = async (e: any) => {
      // ctx.emit('click', e);

      if (innerLoading.value) return;

      try {
        innerLoading.value = true;
        await props.onClick(e); // ? 能触发 @click
      } catch (_) {
      } finally {
        innerLoading.value = false;
      }
    };

    return {
      cls: ns('button'),
      handleClick,
    };
  },
});
</script>

<style scoped lang="less">
.@{prefix}__button {
  text-transform: none;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid #d9d9d9;
  outline: 0;
  color: #fff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);

  &--primary {
    background-color: @primary;
    border-color: @primary;

    &:hover {
      background-color: @color5;
      border-color: @color5;
    }

    &:active {
      background-color: @color9;
      border-color: @color9;
    }
  }

  &--secondary {
    color: @textColor;
    background-color: #fff;
    border-color: @grey;

    &:hover {
      border-color: @color5;
      color: @color5;
    }

    &:active {
      border-color: @color8;
      color: @color8;
    }
  }

  &--size {
    &-default {
      min-width: 32px;
    }
    &-small {
      height: 24px;
      min-width: 24px;
      padding: 0 12px;
    }
  }

  &--shape {
    &-circle {
      border-radius: 50%;
      padding: 0;
    }
    &-round {
      border-radius: 32px;
    }
  }
}
</style>
