<template>
  <RadioGroup v-model="value">
    <div
      class="flex gap-2 rounded-[12px] h-[2.625rem] items-center px-1.5 py-1.5 text-sm"
      :class="variant === 'blue' ? 'bg-custom-blue' : 'bg-white'"
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
          :class="getButtonClasses(active, checked, button.disabled)"
        >
          <RadioGroupLabel
            as="span"
            class="flex h-4 items-center"
            v-show="shouldShowLabel(button, checked)"
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
    variant: {
      type: String,
      default: 'white',
      validator: (value) => ['white', 'blue'].includes(value),
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
  methods: {
    getButtonClasses(active, checked, disabled) {
      const baseClasses = [
        active ? 'ring-outline-gray-2 focus-visible:ring' : '',
      ]

      if (disabled) {
        return baseClasses
      }

      if (this.variant === 'blue') {
        // Blue variant: blue background, white active buttons with black text
        return [
          ...baseClasses,
          checked
            ? '!bg-white shadow-button_shadow_bg !text-black'
            : 'bg-transparent hover:bg-transparent active:bg-transparent !text-black',
        ]
      } else {
        // White variant (default): white background, blue active buttons with black text
        return [
          ...baseClasses,
          checked
            ? '!bg-custom-blue shadow-button_shadow_bg !text-black'
            : 'bg-transparent hover:bg-transparent active:bg-transparent !text-ink-gray-8',
        ]
      }
    },
    shouldShowLabel(button, checked) {
      // If hideLabel is explicitly set, respect it
      if (button.hideLabel !== undefined) {
        return !button.hideLabel
      }

      // If no icon, always show label
      if (!button.icon && !button.iconLeft) {
        return button.label !== undefined
      }

      // If icon exists, check showLabel option
      // 'always' - always show label (default for backwards compatibility)
      // 'active' - only show label when tab is active/checked
      // 'never' - never show label (icon only)
      const showLabel = button.showLabel ?? 'always'

      if (showLabel === 'always') {
        return button.label !== undefined
      } else if (showLabel === 'active') {
        return checked && button.label !== undefined
      } else if (showLabel === 'never') {
        return false
      }

      return button.label !== undefined
    },
  },
}
</script>
