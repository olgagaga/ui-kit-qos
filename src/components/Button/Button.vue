<template>
  <Tooltip :text="tooltip" :disabled="!tooltip?.length">
    <button
      v-bind="$attrs"
      :class="buttonClasses"
      @click="handleClick"
      :disabled="isDisabled"
      :ariaLabel="ariaLabel"
      ref="rootRef"
    >
      <LoadingIndicator
        v-if="loading"
        :class="{
          'h-4 w-4': size == 'sm',
          'h-4.5 w-4.5': size == 'md',
          'h-5 w-5': size == 'lg',
          'h-6 w-6': size == 'xl',
          'h-7 w-7': size == '2xl',
        }"
      />
      <slot name="prefix" v-else-if="$slots['prefix'] || iconLeft">
        <FeatherIcon
          v-if="iconLeft && typeof iconLeft === 'string'"
          :name="iconLeft"
          :class="slotClasses"
          aria-hidden="true"
        />
        <component v-else-if="iconLeft" :is="iconLeft" :class="slotClasses" />
      </slot>

      <template v-if="loading && loadingText">{{ loadingText }}</template>
      <template v-else-if="isIconButton && !loading">
        <FeatherIcon
          v-if="icon && typeof icon === 'string'"
          :name="icon"
          :class="slotClasses"
          :aria-label="label"
        />
        <component v-else-if="icon" :is="icon" :class="slotClasses" />
        <slot name="icon" v-else-if="$slots.icon" />
        <div v-else-if="hasLucideIconInDefaultSlot" :class="slotClasses">
          <slot>{{ label }}</slot>
        </div>
      </template>
      <span v-else :class="{ 'sr-only': isIconButton }" class="truncate">
        <slot>{{ label }}</slot>
      </span>

      <slot name="suffix">
        <FeatherIcon
          v-if="iconRight && typeof iconRight === 'string'"
          :name="iconRight"
          :class="slotClasses"
          aria-hidden="true"
        />
          <component
            v-else-if="iconRight"
            :is="iconRight"
            :class="slotClasses"
          />
      </slot>
    </button>
  </Tooltip>
</template>
<script lang="ts" setup>
import { computed, useSlots, ref } from 'vue'
import FeatherIcon from '../FeatherIcon.vue'
import LoadingIndicator from '../LoadingIndicator.vue'
import { useRouter } from 'vue-router'
import type { ButtonProps, ThemeVariant } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<ButtonProps>(), {
  theme: 'main',
  size: 'sm',
  variant: 'solid',
  loading: false,
  disabled: false,
})

const slots = useSlots()
const router = useRouter()

const buttonClasses = computed(() => {
  let solidClasses = {
    gray: 'text-ink-white bg-surface-gray-7 hover:bg-surface-gray-6 active:bg-surface-gray-5',
    blue: 'text-ink-white bg-blue-500 hover:bg-surface-blue-3 active:bg-blue-700',
    green:
      'text-ink-white bg-surface-green-3 hover:bg-green-700 active:bg-green-800',
    red: 'text-ink-white bg-surface-red-5 hover:bg-surface-red-6 active:bg-surface-red-7',
    main: 'text-white bg-custom-main hover:bg-custom-hover hover:shadow-none shadow-[0_10px_15px_0_rgba(33,81,255,0.38)]',
  }[props.theme]

  let subtleClasses = {
    gray: 'text-ink-gray-8 bg-surface-gray-2 hover:bg-surface-gray-3 active:bg-surface-gray-4',
    blue: 'text-ink-blue-3 bg-surface-blue-2 hover:bg-blue-200 active:bg-blue-300',
    green:
      'text-green-800 bg-surface-green-2 hover:bg-green-200 active:bg-green-300',
    red: 'text-red-700 bg-surface-red-2 hover:bg-surface-red-3 active:bg-surface-red-4',
    main: 'text-custom-input-active bg-custom-inactive hover:bg-custom-inactive-dark',
  }[props.theme]

  let outlineClasses = {
    gray: 'text-ink-gray-8 bg-surface-white bg-surface-white border border-outline-gray-2 hover:border-outline-gray-3 active:border-outline-gray-3 active:bg-surface-gray-4',
    blue: 'text-ink-blue-3 bg-surface-white border border-outline-blue-1 hover:border-blue-400 active:border-blue-400 active:bg-blue-300',
    green:
      'text-green-800 bg-surface-white border border-outline-green-2 hover:border-green-500 active:border-green-500 active:bg-green-300',
    red: 'text-red-700 bg-surface-white border border-outline-red-1 hover:border-outline-red-2 active:border-outline-red-2 active:bg-surface-red-3',
    main: 'text-custom-input-active bg-white border border-custom-input-text hover:bg-custom-inactive',
  }[props.theme]

  let ghostClasses = {
    gray: 'text-ink-gray-8 bg-transparent hover:bg-surface-gray-3 active:bg-surface-gray-4',
    blue: 'text-ink-blue-3 bg-transparent hover:bg-blue-200 active:bg-blue-300',
    green:
      'text-green-800 bg-transparent hover:bg-green-200 active:bg-green-300',
    red: 'text-red-700 bg-transparent hover:bg-surface-red-3 active:bg-surface-red-4',
    main: 'text-custom-input-active bg-transparent hover:bg-custom-inactive',
  }[props.theme]

  // Alert, extra, and gold variants are theme-independent
  let alertClasses = 'text-white bg-custom-error hover:bg-custom-error-dark'
  let extraClasses = 'text-custom-input-active bg-custom-blue hover:bg-custom-blue-dark'
  let goldClasses = 'text-custom-input-active bg-custom-gold hover:bg-custom-gold-dark shadow-[0_10px_15px_0_rgba(255,193,7,0.38)] hover:shadow-none'

  let focusClasses = {
    gray: 'focus-visible:ring focus-visible:ring-outline-gray-3',
    blue: 'focus-visible:ring focus-visible:ring-blue-400',
    green: 'focus-visible:ring focus-visible:ring-outline-green-2',
    red: 'focus-visible:ring focus-visible:ring-outline-red-2',
    main: 'focus-visible:ring focus-visible:ring-custom-main',
  }[props.theme]

  let variantClasses = {
    subtle: subtleClasses,
    solid: solidClasses,
    outline: outlineClasses,
    ghost: ghostClasses,
    alert: alertClasses,
    extra: extraClasses,
    gold: goldClasses,
  }[props.variant]

  let themeVariant: ThemeVariant = `${props.theme}-${props.variant}`

  let disabledClassesMap: Partial<Record<ThemeVariant, string>> = {
    'gray-solid': 'bg-surface-gray-2 text-ink-gray-4',
    'gray-subtle': 'bg-surface-gray-2 text-ink-gray-4',
    'gray-outline':
      'bg-surface-gray-2 text-ink-gray-4 border border-outline-gray-2',
    'gray-ghost': 'text-ink-gray-4',
    'gray-alert': 'bg-surface-gray-2 text-ink-gray-4',
    'gray-extra': 'bg-surface-gray-2 text-ink-gray-4',
    'gray-gold': 'bg-surface-gray-2 text-ink-gray-4',

    'blue-solid': 'bg-blue-300 text-ink-white',
    'blue-subtle': 'bg-surface-blue-2 text-ink-blue-link',
    'blue-outline':
      'bg-surface-blue-2 text-ink-blue-link border border-outline-blue-1',
    'blue-ghost': 'text-ink-blue-link',
    'blue-alert': 'bg-surface-blue-2 text-ink-blue-link',
    'blue-extra': 'bg-surface-blue-2 text-ink-blue-link',
    'blue-gold': 'bg-surface-blue-2 text-ink-blue-link',

    'green-solid': 'bg-surface-green-2 text-ink-green-2',
    'green-subtle': 'bg-surface-green-2 text-ink-green-2',
    'green-outline':
      'bg-surface-green-2 text-ink-green-2 border border-outline-green-2',
    'green-ghost': 'text-ink-green-2',
    'green-alert': 'bg-surface-green-2 text-ink-green-2',
    'green-extra': 'bg-surface-green-2 text-ink-green-2',
    'green-gold': 'bg-surface-green-2 text-ink-green-2',

    'red-solid': 'bg-surface-red-2 text-ink-red-2',
    'red-subtle': 'bg-surface-red-2 text-ink-red-2',
    'red-outline':
      'bg-surface-red-2 text-ink-red-2 border border-outline-red-1',
    'red-ghost': 'text-ink-red-2',
    'red-alert': 'bg-surface-red-2 text-ink-red-2',
    'red-extra': 'bg-surface-red-2 text-ink-red-2',
    'red-gold': 'bg-surface-red-2 text-ink-red-2',

    'main-solid': 'bg-surface-gray-2 text-ink-gray-4',
    'main-subtle': 'bg-surface-gray-2 text-ink-gray-4',
    'main-outline':
      'bg-surface-gray-2 text-ink-gray-4 border border-outline-gray-2',
    'main-ghost': 'text-ink-gray-4',
    'main-alert': 'bg-surface-gray-2 text-ink-gray-4',
    'main-extra': 'bg-surface-gray-2 text-ink-gray-4',
    'main-gold': 'bg-surface-gray-2 text-ink-gray-4',
  }
  let disabledClasses = disabledClassesMap[themeVariant]

  let sizeClasses = {
    sm: 'h-10 text-custom-button px-[1rem] py-[0.75rem] rounded-[0.75rem]',
    md: 'h-11 text-base font-medium px-2.5 rounded',
    lg: 'h-12 text-lg font-medium px-3 rounded-md',
    xl: 'h-14 text-xl font-medium px-3.5 rounded-lg',
    '2xl': 'h-16 text-2xl font-medium px-3.5 rounded-xl',
  }[props.size]

  if (isIconButton.value) {
    sizeClasses = {
      sm: 'h-10 w-10 rounded',
      md: 'h-11 w-11 rounded',
      lg: 'h-12 w-12 rounded-md',
      xl: 'h-14 w-14 rounded-lg',
      '2xl': 'h-16 w-16 rounded-xl',
    }[props.size]
  }

  return [
    'inline-flex items-center justify-center gap-2 transition-colors focus:outline-none shrink-0',
    isDisabled.value ? disabledClasses : variantClasses,
    focusClasses,
    sizeClasses,
  ]
})

const slotClasses = computed(() => {
  let classes = {
    sm: 'h-4',
    md: 'h-4.5',
    lg: 'h-5',
    xl: 'h-6',
    '2xl': 'h-6',
  }[props.size]

  return classes
})

const isDisabled = computed(() => {
  return props.disabled || props.loading
})

const ariaLabel = computed(() => {
  return isIconButton.value ? props.label : null
})

const isIconButton = computed(() => {
  return props.icon || slots.icon || hasLucideIconInDefaultSlot.value
})

const hasLucideIconInDefaultSlot = computed(() => {
  if (!slots.default) return false

  const slotContent = slots.default()
  if (!Array.isArray(slotContent)) return false
  // if the slot contains only one element and it's a lucide icon
  // render it as an icon button
  let firstVNode = slotContent[0]
  if (
    typeof firstVNode.type?.name == 'string' &&
    firstVNode.type?.name?.startsWith('lucide-')
  ) {
    return true
  }
  return false
})

const handleClick = () => {
  if (props.route) {
    return router.push(props.route)
  } else if (props.link) {
    return window.open(props.link, '_blank')
  }
}

const rootRef = ref()
defineExpose({ rootRef })
</script>
