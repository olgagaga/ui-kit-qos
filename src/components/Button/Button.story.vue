<script setup lang="ts">
import { reactive } from 'vue'
import { Button } from './index'
import type { ButtonProps } from './types'

const state = reactive<{
  theme: ButtonProps['theme']
  size: ButtonProps['size']
  label: string
  loading: boolean
  loadingText?: string
  disabled: boolean
  link?: string
  tooltip: string
}>({
  theme: 'main',
  size: 'sm',
  label: 'Button',
  loading: false,
  disabled: false,
  tooltip: 'Hover for more!',
})
const variants: ButtonProps['variant'][] = ['solid', 'subtle', 'outline', 'ghost', 'alert', 'extra', 'gold']
const themes: ButtonProps['theme'][] = ['main', 'gray', 'blue', 'green', 'red']
const sizes: ButtonProps['size'][] = ['sm', 'md', 'lg', 'xl', '2xl']
</script>

<template>
  <Story :layout="{ type: 'grid', width: 300 }">
    <Variant v-for="variant in variants" :key="variant" :title="variant">
      <div class="p-5">
        <Button :variant="variant" v-bind="state">{{ state.label }}</Button>
      </div>
    </Variant>

    <template #controls>
      <HstText v-model="state.label" title="Content" />
      <HstCheckbox v-model="state.disabled" title="Disabled" />
      <HstSelect v-model="state.theme" :options="themes" title="Theme" />
      <HstSelect v-model="state.size" :options="sizes" title="Size" />
    </template>
  </Story>
</template>
