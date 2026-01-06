<script setup lang="ts">
import { ref } from 'vue'
import TabButtons from './TabButtons.vue'

const currentTab = ref('mytasks')
</script>

<template>
  <Story :layout="{ type: 'grid', width: '80%' }">
    <Variant title="Tab Buttons">
      <div class="flex">
        <TabButtons
          :buttons="[
            { label: 'Новые', value: 'mytasks' },
            { label: 'Скоро Анонс', value: 'created' },
          ]"
          v-model="currentTab"
          class="p-5"
        />
      </div>
    </Variant>
  </Story>
</template>
