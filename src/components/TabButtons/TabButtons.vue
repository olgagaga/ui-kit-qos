<template>
  <RadioGroup v-model="value">
    <div
      class="flex gap-2 rounded-[12px] bg-custom-blue h-[2.625rem] items-center px-1.5 py-1.5 text-sm"
    >
      <RadioGroupOption
        as="div"
        v-for="button in buttons"
        :key="button.label"
        :disabled="button.disabled"
        :value="button.value ?? button.label"
        v-slot="{ active, checked }"
      >
        <Button
          @click="button.onClick"
          v-bind="button"
          theme="gray"
          class="!h-[30px] text-custom-button px-[10px] py-[6px] rounded-[12px]"
          :class="[
            active ? 'ring-outline-gray-2 focus-visible:ring' : '',
            button.disabled
              ? ''
              : checked
                ? '!bg-surface-white shadow-button_shadow_bg !text-ink-gray-8'
                : 'bg-transparent hover:bg-transparent active:bg-transparent !text-ink-gray-8',
          ]"
        >
          <RadioGroupLabel
            as="span"
            class="flex h-4 items-center"
            v-show="button.label && !button.hideLabel"
            >{{ button.label }}</RadioGroupLabel
          >
        </Button>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>
<script>
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import FeatherIcon from '../FeatherIcon.vue'
import Button from '../Button/Button.vue'

export default {
  name: 'TabButtons',
  props: {
    buttons: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: [String, Boolean, Number],
    },
  },
  emits: ['update:modelValue'],
  components: {
    Button,
    FeatherIcon,
    RadioGroup,
    RadioGroupOption,
    RadioGroupLabel,
  },
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
  },
}
</script>
