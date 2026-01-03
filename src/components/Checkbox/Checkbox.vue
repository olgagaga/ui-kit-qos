<template>
  <div
    class="inline-flex space-x-2 rounded transition"
    :class="{
      'px-2.5 py-1.5': padding && size === 'sm',
      'px-3 py-2': padding && size === 'md',
      'focus-within:bg-surface-gray-2 focus-within:ring-2 focus-within:ring-outline-gray-3 hover:bg-surface-gray-3 active:bg-surface-gray-4':
        padding && !disabled,
    }"
  >
    <div class="relative inline-flex items-center">
      <input
        class="sr-only peer"
        type="checkbox"
        :disabled="disabled"
        :id="htmlId"
        :checked="Boolean(modelValue)"
        @change="
          (e) =>
            $emit('update:modelValue', (e.target as HTMLInputElement).checked)
        "
        v-bind="attrs"
      />
      <label
        :for="htmlId"
        class="rounded-sm"
        :class="boxClasses"
      >
        <Check
          v-if="modelValue"
          :size="12"
          color="#FFFFFF"
          class="shrink-0 pointer-events-none"
        />
      </label>
    </div>
    <label class="block cursor-pointer" :class="labelClasses" v-if="label" :for="htmlId">
      {{ label }}
    </label>
  </div>
</template>
<script lang="ts" setup>
import { computed, useAttrs } from 'vue'
import { useId } from '../../utils/useId'
import { Check } from '../icons/icons'
import type { CheckboxProps } from './types'

const props = withDefaults(defineProps<CheckboxProps>(), {
  size: 'sm',
  padding: false,
})

const attrs = useAttrs()

const htmlId = props.id ?? useId()

const labelClasses = computed(() => {
  return [
    {
      sm: 'text-base font-medium',
      md: 'text-lg font-medium',
    }[props.size],
    props.disabled ? 'text-ink-gray-4' : 'text-ink-gray-8',
    'select-none',
  ]
})

const boxClasses = computed(() => {
  let sizeClasses = 'w-[14px] h-[14px] border flex items-center justify-center'

  let stateClasses = props.disabled
    ? props.modelValue
      ? 'border-custom-inactive bg-custom-hover cursor-not-allowed'
      : 'border-custom-input-text bg-custom-inactive cursor-not-allowed'
    : props.modelValue
      ? 'border-custom-main bg-[#082CAE] cursor-pointer'
      : 'border-custom-input-text bg-white hover:border-custom-input-active cursor-pointer'

  let focusClasses = props.disabled
    ? ''
    : props.padding
      ? 'peer-focus:ring-0'
      : 'peer-focus:ring-0 peer-focus-visible:ring-2 peer-focus-visible:ring-outline-gray-3'

  return [sizeClasses, stateClasses, focusClasses]
})
</script>
