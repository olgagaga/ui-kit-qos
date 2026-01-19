<template>
  <div class="flex min-w-0 items-center">
    <template v-if="dropdownItems.length">
      <Dropdown class="h-7" :options="dropdownItems">
        <button class="flex items-center rounded px-2 py-1 text-custom-black hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3" style="font-size: 13px; font-weight: 400;">
          ...
        </button>
      </Dropdown>
    </template>
    <div
      class="flex min-w-0 items-center overflow-hidden text-ellipsis whitespace-nowrap"
    >
      <template v-for="(item, i) in crumbs" :key="item.label">
        <Previous :size="25" color="#1C1C1C" class="pr-2" />
        <router-link
          v-if="item.route"
          :to="item.route"
          @click="item.onClick ? item.onClick() : null"
          class="flex items-center rounded pr-2 py-1 text-custom-black focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3"
          style="font-size: 13px; font-weight: 400; line-height: 135%;"
        >
          <slot name="prefix" :item="item" />
          <span>
            {{ item.label }}
          </span>
          <slot name="suffix" :item="item" />
        </router-link>
        <button
          v-else
          @click="item.onClick ? item.onClick() : null"
          class="flex items-center rounded pr-2 py-1 text-custom-black focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3"
          style="font-size: 13px; font-weight: 400; line-height: 135%;"
        >
          <slot name="prefix" :item="item" />
          <span>
            {{ item.label }}
          </span>
          <slot name="suffix" :item="item" />
        </button>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Dropdown } from '../Dropdown'
import { Previous } from '../icons/icons'
import type { BreadcrumbsProps } from './types'

const props = defineProps<BreadcrumbsProps>()

const router = useRouter()
const { width } = useWindowSize()

const items = computed(() => {
  return (props.items || []).filter(Boolean)
})

const dropdownItems = computed(() => {
  if (width.value > 640) return []

  let allExceptLastTwo = items.value.slice(0, -2)
  return allExceptLastTwo.map((item) => {
    let onClick = () => {
      if (item.onClick) {
        item.onClick()
      }
      if (item.route) {
        router.push(item.route)
      }
    }
    return {
      label: item.label,
      onClick,
    }
  })
})

const crumbs = computed(() => {
  if (width.value > 640) return items.value

  let lastTwo = items.value.slice(-2)
  return lastTwo
})
</script>
