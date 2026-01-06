<template>
  <div class="mb-5 mt-2 flex flex-col gap-[2px]" v-if="!group.collapsed">
    <slot>
      <ListRow v-for="row in group.rows" :key="row[list.rowKey]" :row="row" />
    </slot>
  </div>
</template>
<script setup>
import ListRow from './ListRow.vue'
import { inject } from 'vue'

const props = defineProps({
  group: {
    type: Object,
    required: true,
  },
})
const list = inject('list')
</script>
