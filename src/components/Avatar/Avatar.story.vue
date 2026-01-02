<script setup lang="ts">
import { reactive } from 'vue'
import Avatar from './Avatar.vue'
import type { AvatarProps } from './types'

const state = reactive<{
  image: string
  label: string
  size: AvatarProps['size']
}>({
  image: 'https://avatars.githubusercontent.com/u/499550?s=60&v=4',
  label: 'EY',
  size: 'md',
})

const shapes: AvatarProps['shape'][] = ['circle', 'square']
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']
const variants: AvatarProps['variant'][] = ['default', 'label']
</script>

<template>
  <Story :layout="{ type: 'grid', width: 300 }">
    <Variant
      v-for="(variant, index) in variants"
      :key="`${variant}-with-image`"
      :title="`${variant} variant (with image)`"
    >
      <div class="flex gap-4 items-center">
        <Avatar
          v-for="shape in shapes"
          :key="shape"
          :shape="shape"
          :variant="variant"
          v-bind="state"
        />
      </div>
    </Variant>

    <Variant
      v-for="(variant, index) in variants"
      :key="`${variant}-no-image`"
      :title="`${variant} variant (no image)`"
    >
      <div class="flex gap-4 items-center">
        <Avatar
          v-for="shape in shapes"
          :key="shape"
          :shape="shape"
          :variant="variant"
          v-bind="state"
          :image="null"
        />
      </div>
    </Variant>

    <template #controls>
      <HstText v-model="state.label" title="Label" />
      <HstSelect v-model="state.size" :options="sizes" title="Size" />
    </template>
  </Story>
</template>
