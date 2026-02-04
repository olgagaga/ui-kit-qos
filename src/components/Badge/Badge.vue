<template>
  <div
    class="inline-flex select-none items-center gap-1 rounded-full"
    :class="classes"
  >
    <div
      :class="[props.size == 'lg' ? 'max-h-6' : 'max-h-4']"
      v-if="$slots.prefix"
    >
      <slot name="prefix"></slot>
    </div>
    <slot>{{ props.label?.toString() }}</slot>
    <div
      :class="[props.size == 'lg' ? 'max-h-6' : 'max-h-4']"
      v-if="$slots.suffix"
    >
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { BadgeProps } from './types'

const props = withDefaults(defineProps<BadgeProps>(), {
  theme: 'gray',
  size: 'md',
  variant: 'subtle',
})

const classes = computed(() => {
  let solidClasses = {
    gray: 'text-ink-white bg-surface-gray-7',
    blue: 'text-white bg-custom-input',
    green: 'text-ink-green-1 bg-surface-green-3',
    orange: 'text-white  bg-custom-orange',
    red: 'text-white bg-custom-error',
    main: 'text-white bg-custom-main'
  }[props.theme]

  let subtleClasses = {
    gray: 'text-custom-black bg-custom-inactive',
    blue: 'text-custom-input bg-custom-blue',
    green: 'text-custom-correct bg-surface-green-2',
    orange: 'text-ink-amber-3 bg-surface-amber-1',
    red: 'text-custom-error-dark bg-surface-red-1',
    main: 'text-custom-main bg-custom-blue',
  }[props.theme]

  let outlineClasses = {
    gray: 'text-custom-black bg-transparent border border-custom-inactive-dark',
    blue: 'text-custom-input bg-transparent border border-custom-blue-dark',
    green: 'text-custom-correct bg-transparent border border-outline-green-2',
    orange: 'text-ink-amber-3 bg-transparent border border-outline-amber-2',
    red: 'text-custom-error-dark bg-transparent border border-custom-error',
    main: 'text-custom-main bg-transparent border border-custom-input'
  }[props.theme]

  let ghostClasses = {
    gray: 'text-custom-black bg-transparent',
    blue: 'text-custom-input bg-transparent',
    green: 'text-custom-correct bg-transparent',
    orange: 'text-ink-amber-3 bg-transparent',
    red: 'text-custom-error-dark bg-transparent',
    main: 'text-custom-main bg-transparent'
  }[props.theme]

  let variantClasses = {
    subtle: subtleClasses,
    solid: solidClasses,
    outline: outlineClasses,
    ghost: ghostClasses,
  }[props.variant]

  let sizeClasses = {
    sm: 'h-[1.25rem] text-custom-button px-[0.6rem] py-[0.6rem]',
    md: 'h-[1.5rem] text-custom-button px-[0.7rem] py-[0.7rem]',
    lg: 'h-[1.75rem] text-custom-button px-[0.8rem] py-[0.8rem]',
  }[props.size]

  return [variantClasses, sizeClasses]
})
</script>
