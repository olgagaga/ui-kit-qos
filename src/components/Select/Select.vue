<template>
  <Popover
    class="w-full"
    v-model:show="isOpen"
    placement="bottom-start"
    :match-target-width="true"
  >
    <template #target="{ togglePopover }">
      <button
        :class="buttonClasses"
        @click="togglePopover"
        :disabled="disabled"
        :id="id"
        type="button"
      >
        <div class="flex items-center overflow-hidden">
          <slot name="prefix" v-if="$slots.prefix" />
          <span
            class="truncate text-custom-input-header text-custom-input-active"
            v-if="displayValue"
          >
            {{ displayValue }}
          </span>
          <span
            :class="[
              'text-custom-input-header',
              isOpen || modelValue
                ? 'text-custom-input-active'
                : 'text-ink-gray-4',
            ]"
            v-else
          >
            {{ placeholder || '' }}
          </span>
          <slot name="suffix" v-if="$slots.suffix" />
        </div>
        <FeatherIcon
          name="chevron-down"
          :class="['h-7 w-7', iconColor]"
          aria-hidden="true"
        />
      </button>
    </template>
    <template #body="{ isOpen: dropdownOpen }">
      <div v-show="dropdownOpen">
        <div
          class="relative mt-1 rounded-[0.75rem] bg-white text-base shadow-custom-card-shadow-1"
        >
          <div
            class="max-h-[15rem] overflow-y-auto p-[0.375rem] space-y-[0.375rem]"
          >
            <button
              v-for="option in selectOptions"
              :key="option.value"
              type="button"
              :disabled="option.disabled"
              @click="selectOption(option)"
              :class="[
                'flex w-full cursor-pointer items-center justify-between rounded-[0.75rem] h-[2.438rem] px-[0.75rem] text-base text-custom-input-active transition-all',
                {
                  'bg-custom-main text-white font-semibold':
                    modelValue === option.value,
                  'hover:bg-custom-blue hover:text-custom-main hover:font-semibold':
                    modelValue !== option.value && !option.disabled,
                  'opacity-50 cursor-not-allowed': option.disabled,
                },
              ]"
            >
              <span class="flex-1 truncate text-left">
                {{ option.label }}
              </span>
            </button>
            <div
              v-if="selectOptions.length === 0"
              class="rounded-md px-2.5 py-1.5 text-base text-ink-gray-5"
            >
              No options available
            </div>
          </div>
        </div>
      </div>
    </template>
  </Popover>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import FeatherIcon from '../FeatherIcon.vue'
import { Popover } from '../Popover'
import type { SelectProps } from './types'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<SelectProps>(), {
  size: 'sm',
  variant: 'subtle',
})

const emit = defineEmits(['update:modelValue'])
const isOpen = ref(false)

function selectOption(option: { value: string; label: string; disabled?: boolean }) {
  if (!option.disabled) {
    emit('update:modelValue', option.value)
    isOpen.value = false
  }
}

const selectOptions = computed(() => {
  return (
    props.options
      ?.map((option) => {
        if (typeof option === 'string') {
          return {
            label: option,
            value: option,
          }
        }
        return option
      })
      .filter(Boolean) || []
  )
})

const displayValue = computed(() => {
  if (!props.modelValue) return ''
  const selectedOption = selectOptions.value.find(
    (opt) => opt.value === props.modelValue
  )
  return selectedOption?.label || props.modelValue
})

const iconColor = computed(() => {
  const hasValue = props.modelValue && props.modelValue !== ''
  return hasValue || isOpen.value ? 'text-custom-input-active' : 'text-custom-input-text'
})

const buttonClasses = computed(() => {
  const baseClasses =
    'flex h-[2.188rem] w-full items-center justify-between gap-2 rounded-[0.625rem] px-3 py-1 transition-colors border'
  const hasValue = props.modelValue && props.modelValue !== ''

  if (props.disabled) {
    return `${baseClasses} bg-surface-gray-1 border-transparent text-ink-gray-4 cursor-not-allowed`
  }

  if (isOpen.value || hasValue) {
    // Active state (when opened or has selected value)
    return `${baseClasses} bg-white border-custom-input-text focus:border-outline-gray-4`
  } else {
    // Static state (default)
    return `${baseClasses} bg-custom-input-fill hover:bg-surface-gray-2 border-transparent`
  }
})
</script>
