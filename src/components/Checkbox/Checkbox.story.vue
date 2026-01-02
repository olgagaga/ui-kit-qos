<script setup lang="ts">
import { reactive } from 'vue'
import Checkbox from './Checkbox.vue'

const state = reactive({
  size: 'sm',
  value: false,
  disabled: false,
})

const sizes = ['sm', 'md']
</script>
<template>
  <Story :layout="{ width: 500, type: 'grid' }">
    <Variant title="Default">
      <div class="p-2">
        <Checkbox v-bind="state" v-model="state.value" label="Enable feature" />
      </div>
    </Variant>

    <Variant title="Disabled">
      <div class="p-2">
        <Checkbox :size="state.size" :model-value="false" disabled label="Disabled checkbox" />
      </div>
    </Variant>

    <Variant title="Disabled Checked">
      <div class="p-2">
        <Checkbox :size="state.size" :model-value="true" disabled label="Disabled checked" />
      </div>
    </Variant>

    <template #controls>
      <HstSelect v-model="state.size" :options="sizes" title="Size" />
      <HstCheckbox v-model="state.disabled" title="Disabled" />
    </template>
  </Story>
</template>
