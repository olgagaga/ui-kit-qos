<script setup lang="ts">
import { reactive, ref } from 'vue'
import TextInput from './TextInput.vue'
import FeatherIcon from '../FeatherIcon.vue'
import { Avatar } from '../Avatar'
import DatePicker from '../DatePicker/DatePicker.vue'
import DateTimePicker from '../DatePicker/DateTimePicker.vue'
import { Date as DateIcon } from '../icons/icons'

const state = reactive({
  size: 'sm',
  variant: 'subtle' as 'subtle' | 'outline' | 'ghost',
  placeholder: 'Placeholder',
  disabled: false,
  modelValue: '',
})

const dateValue = ref('')
const dateTimeValue = ref('')

const inputTypes = [
  'text',
  'number',
  'email',
  'password',
  'search',
  'tel',
  'time',
  'url',
]
const sizes = ['sm', 'md', 'lg', 'xl']
const variants = ['subtle', 'outline']
</script>

<template>
  <Story :layout="{ type: 'grid', width: 500 }">
    <Variant
      v-for="inputType in inputTypes"
      :key="inputType"
      :title="inputType"
    >
      <div class="p-2">
        <TextInput :type="inputType" v-bind="state" />
      </div>
    </Variant>

    <Variant title="prefix slot icon">
      <div class="p-2">
        <TextInput type="text">
          <template #prefix>
            <FeatherIcon class="w-4" name="search" />
          </template>
        </TextInput>
      </div>
    </Variant>

    <Variant title="suffix slot icon">
      <div class="p-2">
        <TextInput type="text" placeholder="Select an option">
          <template #suffix>
            <FeatherIcon class="w-4 h-4" name="chevron-down" />
          </template>
        </TextInput>
      </div>
    </Variant>

    <Variant title="prefix slot avatar">
      <div class="p-2">
        <TextInput type="text">
          <template #prefix>
            <Avatar
              size="sm"
              image="https://avatars.githubusercontent.com/u/499550?s=60&v=4"
            />
          </template>
        </TextInput>
      </div>
    </Variant>

    <Variant title="date">
      <div class="p-2">
        <DatePicker
          v-model="dateValue"
          :variant="state.variant"
          :placeholder="state.placeholder"
          :disabled="state.disabled"
        >
          <template #suffix="{ togglePopover }">
            <DateIcon
              :size="20"
              class="cursor-pointer"
              @mousedown.prevent="togglePopover"
            />
          </template>
        </DatePicker>
      </div>
    </Variant>

    <Variant title="datetime-local">
      <div class="p-2">
        <DateTimePicker
          v-model="dateTimeValue"
          :variant="state.variant"
          :placeholder="state.placeholder"
          :disabled="state.disabled"
        >
          <template #suffix="{ togglePopover }">
            <DateIcon
              :size="20"
              class="cursor-pointer"
              @mousedown.prevent="togglePopover"
            />
          </template>
        </DateTimePicker>
      </div>
    </Variant>

    <template #controls>
      <HstSelect v-model="state.variant" :options="variants" title="Variant" />
      <HstSelect v-model="state.size" :options="sizes" title="Size" />
    </template>
  </Story>
</template>
