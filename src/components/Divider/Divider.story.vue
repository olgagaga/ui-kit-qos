<script setup lang="ts">
import { reactive } from 'vue'
import Divider from './Divider.vue'

const state = reactive({
  orientation: 'horizontal',
  position: 'center',
  flexItem: false,
  actionLabel: 'Load More',
  actionLoading: false,
})

const orientations = ['horizontal', 'vertical']
const positions = ['center', 'start', 'end']

function handleActionClick() {
  state.actionLoading = true
  setTimeout(() => {
    state.actionLoading = false
    alert('Action clicked!')
  }, 1000)
}
</script>

<template>
  <Story title="Divider" :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Horizontal">
      <div class="p-8 space-y-4">
        <p class="text-ink-gray-7">Content above divider</p>
        <Divider orientation="horizontal" />
        <p class="text-ink-gray-7">Content below divider</p>
      </div>
    </Variant>

    <Variant title="Vertical">
      <div class="p-8 flex items-center gap-4 h-24">
        <p class="text-ink-gray-7">Left content</p>
        <Divider orientation="vertical" flexItem />
        <p class="text-ink-gray-7">Right content</p>
      </div>
    </Variant>

    <Variant title="With Action - Center">
      <div class="p-8 space-y-4">
        <p class="text-ink-gray-7">Content above divider</p>
        <Divider
          orientation="horizontal"
          position="center"
          :action="{
            label: 'Load More',
            loading: false,
            handler: () => alert('Load more clicked!'),
          }"
        />
        <p class="text-ink-gray-7">Content below divider</p>
      </div>
    </Variant>

    <Variant title="With Action - Start">
      <div class="p-8 space-y-4">
        <p class="text-ink-gray-7">Content above divider</p>
        <Divider
          orientation="horizontal"
          position="start"
          :action="{
            label: 'View Details',
            loading: false,
            handler: () => alert('View details clicked!'),
          }"
        />
        <p class="text-ink-gray-7">Content below divider</p>
      </div>
    </Variant>

    <Variant title="With Action - End">
      <div class="p-8 space-y-4">
        <p class="text-ink-gray-7">Content above divider</p>
        <Divider
          orientation="horizontal"
          position="end"
          :action="{
            label: 'Show All',
            loading: false,
            handler: () => alert('Show all clicked!'),
          }"
        />
        <p class="text-ink-gray-7">Content below divider</p>
      </div>
    </Variant>

    <Variant title="Vertical with Action">
      <div class="p-8 flex items-center gap-4 h-40">
        <div class="flex-1">
          <p class="text-ink-gray-7">Left section content</p>
        </div>
        <Divider
          orientation="vertical"
          position="center"
          flexItem
          :action="{
            label: 'More',
            loading: false,
            handler: () => alert('More clicked!'),
          }"
        />
        <div class="flex-1">
          <p class="text-ink-gray-7">Right section content</p>
        </div>
      </div>
    </Variant>

    <Variant title="Interactive">
      <div class="p-8">
        <div
          v-if="state.orientation === 'horizontal'"
          class="space-y-4"
        >
          <p class="text-ink-gray-7">Content above divider</p>
          <Divider
            :orientation="state.orientation"
            :position="state.position"
            :flexItem="state.flexItem"
            :action="{
              label: state.actionLabel,
              loading: state.actionLoading,
              handler: handleActionClick,
            }"
          />
          <p class="text-ink-gray-7">Content below divider</p>
        </div>
        <div
          v-else
          class="flex items-center gap-4 h-40"
        >
          <div class="flex-1">
            <p class="text-ink-gray-7">Left section</p>
          </div>
          <Divider
            :orientation="state.orientation"
            :position="state.position"
            :flexItem="state.flexItem"
            :action="{
              label: state.actionLabel,
              loading: state.actionLoading,
              handler: handleActionClick,
            }"
          />
          <div class="flex-1">
            <p class="text-ink-gray-7">Right section</p>
          </div>
        </div>
      </div>
    </Variant>

    <template #controls>
      <HstSelect
        v-model="state.orientation"
        :options="orientations"
        title="Orientation"
      />
      <HstSelect
        v-model="state.position"
        :options="positions"
        title="Position"
      />
      <HstCheckbox
        v-model="state.flexItem"
        title="Flex Item (for vertical)"
      />
      <HstText
        v-model="state.actionLabel"
        title="Action Label"
      />
      <HstCheckbox
        v-model="state.actionLoading"
        title="Action Loading"
      />
    </template>
  </Story>
</template>
