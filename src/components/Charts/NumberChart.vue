<template>
  <div
    class="flex max-h-[140px] items-center gap-2 overflow-hidden bg-surface-white px-6 pt-5"
    :class="config.delta ? 'pb-6' : 'pb-3'"
  >
    <slot name="body">
      <div class="flex w-full flex-col">
        <slot name="title">
          <span class="truncate text-custom-form-header" style="color: #AFAFAF;">
            {{ config.title }}
          </span>
        </slot>
        <slot name="subtitle" v-bind="{ formatValue }">
          <div
            class="flex-1 flex-shrink-0 truncate text-[24px] font-semibold leading-10"
            style="color: #000000;"
          >
            {{ config.prefix }}{{ formatValue(config.value, 1, true)
            }}{{ config.suffix }}
          </div>
        </slot>
        <slot name="delta" v-bind="{ formatValue }">
          <div
            v-if="config.delta"
            class="flex items-center gap-0.5 text-xs font-medium"
            :style="{
              color: config.negativeIsBetter
                ? config.delta >= 0
                  ? '#FF8BA0'
                  : '#7DDBA5'
                : config.delta >= 0
                  ? '#7DDBA5'
                  : '#FF8BA0',
            }"
          >
            <span class="">
              {{ config.delta >= 0 ? '↑' : '↓' }}
            </span>
            <span>
              {{ config.deltaPrefix }}{{ formatValue(config.delta, 1, true)
              }}{{ config.deltaSuffix }}
            </span>
          </div>
        </slot>
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { formatValue } from './helpers'
import { NumberChartConfig } from './types'

defineProps<{ config: NumberChartConfig }>()
</script>
