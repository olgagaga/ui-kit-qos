<template>
  <div class="space-y-1.5">
    <label class="block" :class="labelClasses" v-if="label" :for="id">
      {{ label }}
    </label>
    <textarea
      ref="textareaRef"
      :placeholder="placeholder"
      :class="inputClasses"
      :disabled="disabled"
      :id="id"
      :value="modelValue"
      :rows="rows"
      @input="handleChange"
      @change="handleChange"
      v-bind="attrs"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs, ref } from 'vue'
import debounce from '../../utils/debounce'
import type { TextareaProps } from './types'

const props = withDefaults(defineProps<TextareaProps>(), {
  type: 'text',
  size: 'sm',
  variant: 'subtle',
  rows: 3,
})

const emit = defineEmits(['update:modelValue'])
const attrs = useAttrs()
const textareaRef = ref<HTMLTextAreaElement | null>(null)

const inputClasses = computed(() => {
  let sizeClasses = {
    sm: 'text-base rounded-[0.625rem]',
    md: 'text-base rounded-[0.625rem]',
    lg: 'text-lg rounded-[0.625rem]',
    xl: 'text-xl rounded-[0.625rem]',
  }[props.size]

  let paddingClasses = {
    sm: ['py-1.5 px-3'],
    md: ['py-1.5 px-3'],
    lg: ['py-1.5 px-3'],
    xl: ['py-1.5 px-3'],
  }[props.size]

  let variant = props.disabled ? 'disabled' : props.variant
  let variantClasses = {
    subtle:
      'border-2 bg-custom-input-fill border-transparent placeholder:text-custom-input-text hover:bg-surface-gray-2 focus:bg-white focus:border-custom-input focus:ring-0 focus-visible:border-custom-input',
    outline:
      'border-2 border-custom-input bg-white placeholder:text-custom-input-text hover:border-outline-gray-3 focus:border-outline-gray-4 focus:ring-0 focus-visible:ring-2 focus-visible:ring-outline-gray-3',
    disabled: [
      'border-2',
      props.variant !== 'ghost' ? 'bg-surface-gray-1' : '',
      props.variant === 'outline'
        ? 'border-outline-gray-2'
        : 'border-transparent',
      'placeholder:text-ink-gray-3',
    ],
  }[variant]

  return [
    sizeClasses,
    paddingClasses,
    variantClasses,
    props.disabled ? 'text-ink-gray-5' : 'text-custom-input-active',
    'transition-colors w-full block text-custom-input-header',
  ]
})

const labelClasses = computed(() => {
  return [
    {
      sm: 'text-xs',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    }[props.size],
    'text-ink-gray-5',
  ]
})

let emitChange = (value: string) => {
  emit('update:modelValue', value)
}
if (props.debounce) {
  emitChange = debounce(emitChange, props.debounce)
}

let handleChange = (e: Event) => {
  emitChange((e.target as HTMLInputElement).value)
}

defineExpose({ el: textareaRef })
</script>
