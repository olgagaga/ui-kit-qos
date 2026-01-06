<template>
  <div class="space-y-1">
    <label class="block text-xs text-ink-gray-5" v-if="label">
      {{ label }}
    </label>
    <div class="flex text-center">
      <div
        v-for="index in displayStarCount"
        :key="index"
        @mouseover="() => !readonly && (hoveredRating = index)"
        @mouseleave="() => !readonly && (hoveredRating = 0)"
        class="mr-1.5"
      >
        <!-- Selected stars with default styling (shadows) -->
        <Star
          v-if="index <= rating && hoveredRating === 0"
          :size="iconSize"
          :class="readonly ? '' : 'cursor-pointer'"
          @click="markRating(index)"
        />
        <!-- Hovered or unselected stars without shadows (only in interactive mode) -->
        <svg
          v-else-if="!readonly"
          :width="iconSize"
          :height="iconSize"
          class="cursor-pointer"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="markRating(index)"
        >
          <path
            d="M5.26839 4.52838L7.34716 0.39785C7.40767 0.278311 7.50074 0.177768 7.61592 0.107496C7.73111 0.0372233 7.86385 0 7.99928 0C8.1347 0 8.26745 0.0372233 8.38264 0.107496C8.49782 0.177768 8.59088 0.278311 8.6514 0.39785L10.7302 4.52838L15.3774 5.1947C15.5114 5.21304 15.6376 5.26819 15.7414 5.35387C15.8452 5.43954 15.9225 5.55228 15.9644 5.67922C16.0064 5.80616 16.0113 5.94218 15.9787 6.07177C15.9461 6.20135 15.8772 6.31927 15.7799 6.41207L12.4177 9.62523L13.2114 14.1647C13.313 14.7473 12.6889 15.191 12.1552 14.9163L7.99928 12.7721L3.84253 14.9163C3.30964 15.1918 2.68553 14.7473 2.78715 14.1639L3.58089 9.62444L0.218686 6.41128C0.121857 6.31842 0.0533747 6.20061 0.0210217 6.07126C-0.0113313 5.94191 -0.00625679 5.8062 0.0356684 5.67955C0.0775935 5.5529 0.154688 5.4404 0.258188 5.35483C0.361688 5.26926 0.487443 5.21405 0.621158 5.19549L5.26839 4.52838Z"
            :fill="getStarColor(index)"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import Star from '../icons/components/Star.vue'
import type { RatingProps } from './types'

const props = withDefaults(defineProps<RatingProps>(), {
  modelValue: 0,
  rating_from: 5,
  size: 'md',
  readonly: false,
})

const emit = defineEmits(['update:modelValue'])
const rating = ref(props.modelValue)
const hoveredRating = ref(0)

const iconSize = computed(() => {
  return {
    sm: '12',
    md: '16',
    lg: '20',
    xl: '24',
  }[props.size]
})

const displayStarCount = computed(() => {
  // In readonly mode, only show selected stars
  if (props.readonly) {
    return rating.value
  }
  // In interactive mode, show all stars
  return props.rating_from
})

const getStarColor = (index: number) => {
  if (index <= hoveredRating.value && index > rating.value) {
    return '#FEF3C7' // Light yellow for hover
  } else if (index <= rating.value) {
    return '#FFC107' // Yellow for selected
  }
  return '#D1D5DB' // Gray for unselected
}

const emitChange = (value: number) => {
  emit('update:modelValue', value)
}

const markRating = (index: number) => {
  if (props.readonly) return
  emitChange(index)
  rating.value = index
}

watch(
  () => props.modelValue,
  (newVal) => {
    rating.value = newVal
  },
)
</script>
