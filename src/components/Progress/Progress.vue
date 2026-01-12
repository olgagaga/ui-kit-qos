<template>
  <div class="w-full space-y-[10px]">
    <div
      v-if="props.label || props.hint"
      class="flex items-baseline justify-between"
    >
      <span v-if="props.label" class="text-base font-medium text-ink-gray-8">
        {{ props.label }}
      </span>
      <!-- Empty for alignment -->
      <span v-else></span>

      <span class="self-end" v-if="props.hint || $slots.hint">
        <slot name="hint">
          <span class="text-base font-medium text-ink-gray-4">
            {{ props.value }}%
          </span>
        </slot>
      </span>
    </div>

    <div
      class="relative flex items-center overflow-hidden rounded-full border"
      :class="indicatorContainerClasses"
      :aria-valuemax="MAX_VALUE"
      :aria-valuemin="MIN_VALUE"
      :aria-valuenow="props.value"
      role="progressbar"
      :style="{ borderColor: '#CBD5E1' }"
    >
      <!-- Continuous Progress Bar -->
      <div
        v-if="!props.intervals"
        class="absolute left-[1px] top-[1px] h-[calc(100%-2px)] rounded-full transition-all duration-300"
        :style="progressStyle"
      ></div>

      <!-- Interval Progress Bar -->
      <div
        v-if="props.intervals"
        class="absolute left-[1px] top-[1px] flex h-[calc(100%-2px)] w-[calc(100%-2px)] space-x-1"
      >
        <div
          v-for="index in intervalCount"
          :key="index"
          class="h-full w-full rounded-full"
          :class="
            index <= filledIntervalCount
              ? 'bg-custom-main'
              : 'bg-custom-blue'
          "
        ></div>
      </div>

      <!-- Percentage Text -->
      <span
        v-if="props.showPercentage && !props.intervals"
        class="absolute right-2 text-[10px] font-medium text-custom-main bg-white px-1 rounded-lg opacity-70"
      >
        {{ props.value }}%
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ProgressProps } from './types'

const MIN_VALUE = 0
const MAX_VALUE = 100

const props = withDefaults(defineProps<ProgressProps>(), {
  size: 'sm',
  hint: false,
  label: '',
  intervals: false,
  intervalCount: 6,
  showPercentage: false,
})

const indicatorContainerClasses = computed(() => {
  return 'h-[17px]'
})

const progressStyle = computed(() => {
  const width = Math.min(Math.max(props.value, 0), MAX_VALUE)
  return {
    width: `calc(${width}% - 2px)`,
    background: 'linear-gradient(135deg, #082CAE 0%, #26409F 53%, #4D73FB 100%)',
  }
})

const filledIntervalCount = computed(() => {
  if (props.value > MAX_VALUE) {
    return props.intervalCount
  }

  return Math.round((props.value / MAX_VALUE) * props.intervalCount)
})
</script>
