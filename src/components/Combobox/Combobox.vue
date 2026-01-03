<script setup lang="ts">
import {
  computed,
  type Component,
  type VNode,
  ref,
  watch,
  h,
  FunctionalComponent,
} from 'vue'
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxPortal,
  ComboboxRoot,
  ComboboxTrigger,
  ComboboxViewport,
} from 'reka-ui'
import LucideCheck from '~icons/lucide/check'
import LucideChevronDown from '~icons/lucide/chevron-down'
import type {
  CustomOption,
  SimpleOption,
  GroupedOption,
  ComboboxOption,
  ComboboxProps,
} from './types'

const props = defineProps<ComboboxProps>()
const emit = defineEmits([
  'update:modelValue',
  'update:selectedOption',
  'focus',
  'blur',
])

const searchTerm = ref(getDisplayValue(props.modelValue))
const internalModelValue = ref(props.modelValue)
const isOpen = ref(false)
const userHasTyped = ref(false)
const lastSearchTerm = ref('') // Preserve search context for custom option onClick handlers

watch(
  () => props.modelValue,
  (newValue) => {
    internalModelValue.value = newValue
    searchTerm.value = getDisplayValue(newValue)
  },
)
watch(
  () => getDisplayValue(props.modelValue),
  (newDisplay) => {
    if (!userHasTyped.value) searchTerm.value = newDisplay
  },
)

const onUpdateModelValue = (value: string | null) => {
  const selectedOpt = value
    ? allOptionsFlat.value.find((opt) => getKey(opt) === value) || null
    : null

  if (selectedOpt && isCustomOption(selectedOpt)) {
    const context = { searchTerm: lastSearchTerm.value }
    selectedOpt.onClick(context)

    if (selectedOpt.keepOpen) {
      // Defer opening to prevent interference with default close behavior
      setTimeout(() => {
        isOpen.value = true
      }, 0)
    } else {
      isOpen.value = false
      searchTerm.value = getDisplayValue(internalModelValue.value)
      lastSearchTerm.value = ''
      userHasTyped.value = false
    }

    return
  }
  internalModelValue.value = value
  emit('update:modelValue', value)
  searchTerm.value = getDisplayValue(value)
  lastSearchTerm.value = ''
  userHasTyped.value = false
  emit('update:selectedOption', selectedOpt)
}

function isGroup(option: ComboboxOption): option is GroupedOption {
  return typeof option === 'object' && 'group' in option
}

function isCustomOption(option: SimpleOption): option is CustomOption {
  return typeof option === 'object' && option.type === 'custom'
}

function getLabel(option: SimpleOption): string {
  return typeof option === 'string' ? option : option.label
}

function getValue(option: SimpleOption): string | undefined {
  if (typeof option === 'string') return option
  if (isCustomOption(option)) return undefined
  return option.value
}

function getKey(option: SimpleOption): string {
  if (typeof option === 'string') return option
  if (isCustomOption(option)) return option.key
  return option.value
}

function isDisabled(option: SimpleOption): boolean {
  return typeof option === 'object' && !!option.disabled
}

function getIcon(option: SimpleOption): string | Component | undefined {
  return typeof option === 'object' ? option.icon : undefined
}

function getSlotName(option: SimpleOption): string | undefined {
  return isCustomOption(option) ? option.slotName : undefined
}

function getRenderFunction(option: SimpleOption): (() => VNode) | undefined {
  return isCustomOption(option) ? option.render : undefined
}

const allOptionsFlat = computed(() => {
  const flatOptions: SimpleOption[] = []
  props.options.forEach((optionOrGroup) => {
    if (isGroup(optionOrGroup)) {
      flatOptions.push(...optionOrGroup.options)
    } else {
      flatOptions.push(optionOrGroup)
    }
  })
  return flatOptions
})

function getDisplayValue(selectedValue: string | null | undefined): string {
  if (!selectedValue) return ''
  const options = props.options.flatMap((opt) =>
    isGroup(opt) ? opt.options : opt,
  )
  const selectedOption = options.find((opt) => getValue(opt) === selectedValue)
  return selectedOption ? getLabel(selectedOption) : selectedValue || ''
}

const selectedOption = computed(() => {
  if (!internalModelValue.value) return null
  return allOptionsFlat.value.find(
    (opt) => getValue(opt) === internalModelValue.value,
  )
})

const selectedOptionIcon = computed(() => {
  return selectedOption.value ? getIcon(selectedOption.value) : undefined
})

const RenderIcon: FunctionalComponent<{ icon?: string | Component }> = (
  props,
) => {
  if (!props.icon) return null
  const iconContent =
    typeof props.icon === 'string'
      ? h('span', props.icon)
      : h(props.icon, { class: 'w-4 h-4' })

  return h(
    'span',
    {
      class: 'flex-shrink-0 w-4 h-4 inline-flex items-center justify-center',
    },
    [iconContent],
  )
}

const shouldShowOption = (
  option: SimpleOption,
  search: string,
  context: { searchTerm: string },
) => {
  if (isCustomOption(option)) {
    if (option.condition) {
      return option.condition(context)
    }
    if (!search) return true
    return getLabel(option).toLowerCase().includes(search.toLowerCase())
  }

  if (!search) return true
  const label = getLabel(option).toLowerCase()
  const value = getValue(option)?.toLowerCase() || ''
  const lowerSearch = search.toLowerCase()
  return label.includes(lowerSearch) || value.includes(lowerSearch)
}

const filterFunction = (options: ComboboxOption[], search: string) => {
  const context = { searchTerm: search }
  const filtered: ComboboxOption[] = []

  options.forEach((optionOrGroup) => {
    if (isGroup(optionOrGroup)) {
      const filteredGroupOptions = optionOrGroup.options.filter((opt) =>
        shouldShowOption(opt, search, context),
      )
      if (filteredGroupOptions.length > 0) {
        filtered.push({ ...optionOrGroup, options: filteredGroupOptions })
      }
    } else if (shouldShowOption(optionOrGroup, search, context)) {
      filtered.push(optionOrGroup)
    }
  })

  return filtered
}

const filteredOptions = computed(() => {
  if (isOpen.value && !userHasTyped.value && internalModelValue.value) {
    return props.options
  }
  return filterFunction(props.options, searchTerm.value)
})

const handleInputChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  searchTerm.value = target.value
  lastSearchTerm.value = target.value
  userHasTyped.value = true

  if (searchTerm.value === '') {
    internalModelValue.value = null
    emit('update:modelValue', null)
  }
}

const handleOpenChange = (open: boolean) => {
  isOpen.value = open
  if (!open) {
    searchTerm.value = getDisplayValue(internalModelValue.value)
    userHasTyped.value = false
  } else {
    userHasTyped.value = false
  }
}

const handleFocus = (event: FocusEvent) => {
  if (props.openOnFocus) {
    isOpen.value = true
  }
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleClick = () => {
  if (props.openOnClick) {
    isOpen.value = true
  }
}

const reset = () => {
  searchTerm.value = ''
  userHasTyped.value = false
  internalModelValue.value = null
  emit('update:modelValue', null)
  emit('update:selectedOption', null)
}

defineExpose({
  reset,
})
</script>

<template>
  <div class="relative">
    <ComboboxRoot
      :model-value="internalModelValue"
      @update:modelValue="onUpdateModelValue"
      @update:open="handleOpenChange"
      :ignore-filter="true"
      :open="isOpen"
    >
      <ComboboxAnchor
        class="flex h-[2.188rem] w-full items-center justify-between gap-2 rounded-[0.625rem] px-3 py-1 transition-colors border"
        :class="[
          { 'opacity-50 pointer-events-none': disabled },
          isOpen || internalModelValue
            ? 'bg-white border-custom-input-text focus-within:border-outline-gray-4'
            : 'bg-custom-input-fill hover:bg-surface-gray-2 border-transparent',
        ]"
        @click="handleClick"
      >
        <div class="flex items-center gap-2 flex-1 overflow-hidden">
          <RenderIcon v-if="selectedOptionIcon" :icon="selectedOptionIcon" />
          <ComboboxInput
            :value="searchTerm"
            @input="handleInputChange"
            @focus="handleFocus"
            @blur="handleBlur"
            class="bg-transparent p-0 focus:outline-0 border-0 focus:border-0 focus:ring-0 text-custom-input-header text-custom-input-active h-full placeholder:text-custom-input-text w-full"
            :placeholder="placeholder || ''"
            :disabled="disabled"
            autocomplete="off"
          />
        </div>
        <ComboboxTrigger :disabled="disabled">
          <LucideChevronDown
            class="h-7 w-7"
            :class="
              isOpen || internalModelValue
                ? 'text-custom-input-active'
                : 'text-custom-input-text'
            "
          />
        </ComboboxTrigger>
      </ComboboxAnchor>
      <ComboboxPortal>
        <ComboboxContent
          class="z-10 min-w-[--reka-combobox-trigger-width] mt-1 bg-white overflow-hidden rounded-[0.75rem] shadow-custom-card-shadow-1"
          position="popper"
          @openAutoFocus.prevent
          @closeAutoFocus.prevent
          :align="props.placement || 'start'"
        >
          <ComboboxViewport
            class="max-h-[15rem] overflow-y-auto p-[0.375rem] space-y-[0.375rem]"
          >
            <ComboboxEmpty
              class="text-ink-gray-5 text-base rounded-md px-2.5 py-1.5"
            >
              No results found
            </ComboboxEmpty>
            <template
              v-for="(optionOrGroup, index) in filteredOptions"
              :key="index"
            >
              <ComboboxGroup v-if="isGroup(optionOrGroup)">
                <ComboboxLabel
                  class="sticky top-0 truncate bg-white px-2.5 py-1.5 text-sm font-medium text-ink-gray-5"
                >
                  {{ optionOrGroup.group }}
                </ComboboxLabel>
                <ComboboxItem
                  v-for="(option, idx) in optionOrGroup.options"
                  :key="`${index}-${idx}`"
                  :value="getKey(option)"
                  :disabled="isDisabled(option)"
                  class="flex cursor-pointer items-center justify-between rounded-[0.75rem] h-[2.438rem] px-[0.75rem] text-base text-custom-input-active transition-all relative select-none outline-none border-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none data-[highlighted]:bg-custom-blue data-[highlighted]:text-custom-main data-[highlighted]:font-semibold"
                >
                  <slot
                    v-if="getSlotName(option)"
                    :name="getSlotName(option)"
                    :option="option"
                    :searchTerm="searchTerm"
                  />
                  <component
                    v-else-if="getRenderFunction(option)"
                    :is="getRenderFunction(option)"
                  />
                  <template v-else>
                    <div
                      class="flex flex-1 gap-2 overflow-hidden items-center h-[1.938rem]"
                    >
                      <RenderIcon
                        v-if="getIcon(option)"
                        :icon="getIcon(option)"
                      />
                      <span class="flex-1 truncate">
                        {{ getLabel(option) }}
                      </span>
                    </div>
                    <ComboboxItemIndicator
                      class="ml-2 flex-shrink-0 inline-flex items-center justify-center"
                    >
                      <LucideCheck class="size-4 text-custom-main" />
                    </ComboboxItemIndicator>
                  </template>
                </ComboboxItem>
              </ComboboxGroup>
              <ComboboxItem
                v-else
                :key="index"
                :value="getKey(optionOrGroup)"
                :disabled="isDisabled(optionOrGroup)"
                class="flex cursor-pointer items-center justify-between rounded-[0.75rem] h-[2.438rem] px-[0.75rem] text-base text-custom-input-active transition-all relative select-none outline-none border-none data-[disabled]:opacity-50 data-[disabled]:pointer-events-none data-[highlighted]:bg-custom-blue data-[highlighted]:text-custom-main data-[highlighted]:font-semibold"
              >
                <slot
                  v-if="getSlotName(optionOrGroup)"
                  :name="getSlotName(optionOrGroup)"
                  :option="optionOrGroup"
                  :searchTerm="searchTerm"
                />
                <component
                  v-else-if="getRenderFunction(optionOrGroup)"
                  :is="getRenderFunction(optionOrGroup)"
                />
                <template v-else>
                  <div
                    class="flex flex-1 gap-2 overflow-hidden items-center h-[1.938rem]"
                  >
                    <RenderIcon
                      v-if="getIcon(optionOrGroup)"
                      :icon="getIcon(optionOrGroup)"
                    />
                    <span class="flex-1 truncate">
                      {{ getLabel(optionOrGroup) }}
                    </span>
                  </div>
                  <ComboboxItemIndicator
                    class="ml-2 flex-shrink-0 inline-flex items-center justify-center"
                  >
                    <LucideCheck class="size-4 text-custom-main" />
                  </ComboboxItemIndicator>
                </template>
              </ComboboxItem>
            </template>
          </ComboboxViewport>
        </ComboboxContent>
      </ComboboxPortal>
    </ComboboxRoot>
  </div>
</template>
