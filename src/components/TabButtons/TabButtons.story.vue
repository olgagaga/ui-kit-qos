<script setup lang="ts">
import { ref, h } from 'vue'
import TabButtons from './TabButtons.vue'
import FeatherIcon from '../FeatherIcon.vue'

const currentTab = ref('mytasks')
const currentTab2 = ref('home')
const currentTab3 = ref('settings')
</script>

<template>
  <Story :layout="{ type: 'grid', width: '80%' }">
    <Variant title="White Variant (Default)">
      <div class="flex">
        <TabButtons
          :buttons="[
            { label: 'Новые', value: 'mytasks' },
            { label: 'Скоро Анонс', value: 'created' },
          ]"
          v-model="currentTab"
          variant="white"
          class="p-5"
        />
      </div>
    </Variant>

    <Variant title="Blue Variant">
      <div class="flex">
        <TabButtons
          :buttons="[
            { label: 'Новые', value: 'mytasks' },
            { label: 'Скоро Анонс', value: 'created' },
          ]"
          v-model="currentTab"
          variant="blue"
          class="p-5"
        />
      </div>
    </Variant>

    <Variant title="With Icons - Label Always Shown">
      <div class="flex">
        <TabButtons
          :buttons="[
            {
              label: 'Home',
              value: 'home',
              iconLeft: h(FeatherIcon, { class: 'w-4 h-4', name: 'home' }),
              showLabel: 'always'
            },
            {
              label: 'Settings',
              value: 'settings',
              iconLeft: h(FeatherIcon, { class: 'w-4 h-4', name: 'settings' }),
              showLabel: 'always'
            },
            {
              label: 'Profile',
              value: 'profile',
              iconLeft: h(FeatherIcon, { class: 'w-4 h-4', name: 'user' }),
              showLabel: 'always'
            },
          ]"
          v-model="currentTab2"
          class="p-5"
        />
      </div>
    </Variant>

    <Variant title="With Icons - Label Only When Active">
      <div class="flex">
        <TabButtons
          :buttons="[
            {
              label: 'Home',
              value: 'home',
              iconLeft: h(FeatherIcon, { class: 'w-4 h-4', name: 'home' }),
              showLabel: 'active'
            },
            {
              label: 'Settings',
              value: 'settings',
              iconLeft: h(FeatherIcon, { class: 'w-4 h-4', name: 'settings' }),
              showLabel: 'active'
            },
            {
              label: 'Profile',
              value: 'profile',
              iconLeft: h(FeatherIcon, { class: 'w-4 h-4', name: 'user' }),
              showLabel: 'active'
            },
          ]"
          v-model="currentTab2"
          class="p-5"
        />
      </div>
    </Variant>

    <Variant title="With Icons - Icon Only (No Labels)">
      <div class="flex">
        <TabButtons
          :buttons="[
            {
              label: 'Home',
              value: 'home',
              icon: h(FeatherIcon, { class: 'w-4 h-4', name: 'home' }),
              showLabel: 'never'
            },
            {
              label: 'Settings',
              value: 'settings',
              icon: h(FeatherIcon, { class: 'w-4 h-4', name: 'settings' }),
              showLabel: 'never'
            },
            {
              label: 'Profile',
              value: 'profile',
              icon: h(FeatherIcon, { class: 'w-4 h-4', name: 'user' }),
              showLabel: 'never'
            },
          ]"
          v-model="currentTab3"
          class="p-5"
        />
      </div>
    </Variant>
  </Story>
</template>
