<template>
  <div :class="switchGroupClasses">
    <div class="flex flex-col gap-1">
      <div class="flex items-center">
        <FeatherIcon
          v-if="props.icon && typeof props.icon === 'string'"
          :name="props.icon"
          :class="iconClasses"
          aria-hidden="true"
        />
        <component
          :class="iconClasses"
          v-else-if="props.icon"
          :is="props.icon"
        />
        <label :class="switchLabelClasses" :for="id">
          {{ props.label }}
        </label>
      </div>

      <span
        v-if="props.description"
        class="max-w-xs text-p-sm text-ink-gray-7"
        >{{ props.description }}</span
      >
    </div>
    <SwitchRoot
      :id
      v-model="model"
      @keyup.space.self="model = !model"
      :class="switchClasses"
      :disabled="props.disabled"
    >
      <SwitchThumb :class="switchCircleClasses" />
    </SwitchRoot>
  </div>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue'
import { useId } from '../../utils/useId'
import FeatherIcon from '../FeatherIcon.vue'
import { SwitchRoot, SwitchThumb } from 'reka-ui'
import type { SwitchProps } from './types'

const props = withDefaults(defineProps<SwitchProps>(), {
  size: 'sm',
  label: '',
  description: '',
  disabled: false,
  labelClasses: '',
})

const model = defineModel<boolean>({ default: false })
const emit = defineEmits(['change'])
watch(model, (val) => {
  emit('change', val)
})

const id = useId()
const switchClasses = computed(() => {
  return [
    'relative inline-flex flex-shrink-0 cursor-pointer rounded-full transition-colors duration-100 ease-in-out items-center',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-outline-gray-3',
    'disabled:cursor-not-allowed disabled:bg-surface-gray-3',
    model.value
      ? 'bg-custom-main enabled:hover:bg-custom-hover enabled:focus-visible:bg-custom-hover group-hover:enabled:bg-custom-hover'
      : 'bg-custom-input-text enabled:hover:opacity-80 enabled:focus-visible:opacity-80 group-hover:enabled:opacity-80',
    props.size === 'md' ? 'h-5 w-8 p-0.5' : 'h-[21px] w-[37px] p-[3px]',
  ]
})

const switchCircleClasses = computed(() => {
  return [
    'pointer-events-none inline-block transform rounded-full bg-white ring-0 transition duration-100 ease-in-out shadow-[0_3.52px_7.04px_0_rgba(0,0,0,0.22)]',
    props.size === 'md' ? 'h-4 w-4' : 'h-[15px] w-[15px]',
    props.size === 'md'
      ? model.value
        ? 'translate-x-[12px] rtl:-translate-x-[12px]'
        : 'translate-x-0'
      : model.value
        ? 'translate-x-[16px] rtl:-translate-x-[16px]'
        : 'translate-x-0',
  ]
})

const iconClasses = 'mr-2 h-4 w-4 flex-shrink-0 text-ink-gray-6'
const switchLabelClasses = computed(() => {
  return [
    'font-medium leading-normal',
    props.disabled && !props.description
      ? 'text-ink-gray-4'
      : 'text-ink-gray-8',
    props.size === 'md' ? 'text-lg' : 'text-base',
    props.labelClasses,
  ]
})

const switchGroupClasses = computed(() => {
  if (!props.label) return
  const classes = ['flex justify-between']
  if (!props.description) {
    classes.push(
      'group items-center space-x-3 cursor-pointer rounded focus-visible:bg-surface-gray-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-outline-gray-3',
    )

    classes.push(
      props.disabled
        ? 'cursor-not-allowed'
        : 'hover:bg-surface-gray-3 active:bg-surface-gray-4',
    )

    classes.push(props.size === 'md' ? 'px-3 py-1.5' : 'px-2.5 py-1.5')
  } else {
    classes.push('items-start')
    classes.push(
      props.size === 'md' ? 'px-3 space-x-3.5' : 'px-2.5 space-x-2.5',
    )
  }

  return classes
})
</script>
