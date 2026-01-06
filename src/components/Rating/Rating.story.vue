<template>
  <Story :layout="{ type: 'grid', width: 300 }">
    <Variant title="Default">
      <div class="p-2">
        <Rating v-model="state.rating" :size="state.size" label="Rating" />
      </div>
    </Variant>
    <Variant title="Readonly">
      <div class="p-2">
        <Rating v-model="state.rating" :size="state.size" label="Rating" :readonly="true" />
      </div>
    </Variant>

    <template #controls>
      <HstNumber v-model="state.rating" :min="0" :max="5" title="Rating Value" />
      <HstSelect v-model="state.size" :options="sizes" title="Size" />
    </template>
  </Story>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import Rating from './Rating.vue'

const state = reactive({
  size: 'md' as 'sm' | 'md' | 'lg' | 'xl',
  rating: 3,
})

const sizes = ['sm', 'md', 'lg', 'xl']
</script>
