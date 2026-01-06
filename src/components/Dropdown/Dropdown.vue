<template>
  <DropdownMenuRoot v-model:open="toggleState" v-slot="{ open }">
    <DropdownMenuTrigger as-child>
      <slot v-if="$slots.default" v-bind="{ open, close, ...attrs }" />
      <Button v-else :active="false" v-bind="{ ...button, ...attrs }">
        {{ button ? button?.label || null : 'Options' }}
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        :class="[
          cssClasses.dropdownContent,
          {
            'origin-top-left': placement == 'left',
            'origin-top-right': placement == 'right',
            'origin-top': placement == 'center',
          },
        ]"
        :side="side"
        :align="align"
        :side-offset="offset"
      >
        <template v-for="group in groups" :key="group.key">
          <div v-if="group.items.length" :class="cssClasses.groupContainer">
            <DropdownMenuLabel
              v-if="group.group && !group.hideLabel"
              :class="[cssClasses.groupLabel, getTextColor(group)]"
            >
              {{ group.group }}
            </DropdownMenuLabel>

            <template v-for="item in group.items" :key="item.label">
              <div v-if="item.switch" :class="cssClasses.itemButton">
                <FeatherIcon
                  v-if="item.icon && typeof item.icon === 'string'"
                  :name="item.icon"
                  :class="[cssClasses.itemIcon, getIconColor(item)]"
                  aria-hidden="true"
                />
                <component
                  :class="[cssClasses.itemIcon, getIconColor(item)]"
                  v-else-if="item.icon"
                  :is="item.icon"
                />
                <span :class="[cssClasses.itemLabel, getTextColor(item)]">
                  {{ item.label }}
                </span>
                <Switch
                  class="ml-auto"
                  label-classes="font-normal cursor-pointer"
                  @change="item.onClick?.($event)"
                  :model-value="item.switchValue || false"
                />
              </div>
              <DropdownMenuItem v-else as-child @select="item.onClick">
                <slot v-if="$slots.item" name="item" v-bind="{ item, close }" />
                <component
                  v-else-if="item.component"
                  :is="item.component"
                  :active="false"
                />

                <DropdownMenuSub v-else-if="item.submenu">
                  <DropdownMenuSubTrigger as-child>
                    <button
                      :class="[
                        cssClasses.submenuTrigger,
                        getSubmenuBackgroundColor(item),
                      ]"
                    >
                      <FeatherIcon
                        v-if="item.icon && typeof item.icon === 'string'"
                        :name="item.icon"
                        :class="[cssClasses.itemIcon, getIconColor(item)]"
                        aria-hidden="true"
                      />
                      <component
                        :class="[cssClasses.itemIcon, getIconColor(item)]"
                        v-else-if="item.icon"
                        :is="item.icon"
                      />
                      <div
                        v-else-if="groupHasIcons(group)"
                        :class="cssClasses.itemIconPlaceholder"
                      />
                      <span :class="[cssClasses.itemLabel, getTextColor(item)]">
                        {{ item.label }}
                      </span>
                      <Next
                        :size="16"
                        color="currentColor"
                        :class="cssClasses.chevronIcon"
                        aria-hidden="true"
                      />
                    </button>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent
                      :class="cssClasses.dropdownContent"
                      :side-offset="4"
                    >
                      <div
                        v-for="submenuGroup in getSubmenuGroups(item.submenu)"
                        :key="submenuGroup.key"
                        :class="cssClasses.groupContainer"
                      >
                        <DropdownMenuLabel
                          v-if="submenuGroup.group && !submenuGroup.hideLabel"
                          :class="cssClasses.groupLabel"
                        >
                          {{ submenuGroup.group }}
                        </DropdownMenuLabel>
                        <template
                          v-for="subItem in submenuGroup.items"
                          :key="subItem.label"
                        >
                          <div
                            v-if="subItem.switch"
                            :class="cssClasses.itemButton"
                          >
                            <FeatherIcon
                              v-if="
                                subItem.icon && typeof subItem.icon === 'string'
                              "
                              :name="subItem.icon"
                              :class="[
                                cssClasses.itemIcon,
                                getIconColor(subItem),
                              ]"
                              aria-hidden="true"
                            />
                            <component
                              :class="[
                                cssClasses.itemIcon,
                                getIconColor(subItem),
                              ]"
                              v-else-if="subItem.icon"
                              :is="subItem.icon"
                            />
                            <span
                              :class="[
                                cssClasses.itemLabel,
                                getTextColor(subItem),
                              ]"
                            >
                              {{ subItem.label }}
                            </span>
                            <Switch
                              class="ml-auto"
                              label-classes="font-normal cursor-pointer"
                              @change="subItem.onClick?.($event)"
                              :model-value="subItem.switchValue || false"
                            />
                          </div>

                          <DropdownMenuItem
                            v-else
                            as-child
                            @select="
                              (event: PointerEvent) =>
                                handleItemClick(subItem, event)
                            "
                          >
                            <component
                              v-if="subItem.component"
                              :is="subItem.component"
                              :active="false"
                            />
                            <button
                              v-else
                              :class="[
                                cssClasses.itemButton,
                                getBackgroundColor(subItem),
                              ]"
                            >
                              <FeatherIcon
                                v-if="
                                  subItem.icon &&
                                  typeof subItem.icon === 'string'
                                "
                                :name="subItem.icon"
                                :class="[
                                  cssClasses.itemIcon,
                                  getIconColor(subItem),
                                ]"
                                aria-hidden="true"
                              />
                              <component
                                :class="[
                                  cssClasses.itemIcon,
                                  getIconColor(subItem),
                                ]"
                                v-else-if="subItem.icon"
                                :is="subItem.icon"
                              />
                              <div
                                v-else-if="groupHasIcons(submenuGroup)"
                                :class="cssClasses.itemIconPlaceholder"
                              />
                              <span
                                :class="[
                                  cssClasses.itemLabel,
                                  getTextColor(subItem),
                                ]"
                              >
                                {{ subItem.label }}
                              </span>
                            </button>
                          </DropdownMenuItem>
                        </template>
                      </div>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <button
                  v-else
                  :class="[cssClasses.itemButton, getBackgroundColor(item)]"
                >
                  <FeatherIcon
                    v-if="item.icon && typeof item.icon === 'string'"
                    :name="item.icon"
                    :class="[cssClasses.itemIcon, getIconColor(item)]"
                    aria-hidden="true"
                  />
                  <component
                    :class="[cssClasses.itemIcon, getIconColor(item)]"
                    v-else-if="item.icon"
                    :is="item.icon"
                  />
                  <div
                    v-else-if="groupHasIcons(group)"
                    :class="cssClasses.itemIconPlaceholder"
                  />
                  <span :class="[cssClasses.itemLabel, getTextColor(item)]"
                    >{{ item.label }}
                  </span>
                </button>
              </DropdownMenuItem>
            </template>
          </div>
        </template>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<script setup lang="ts">
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from 'reka-ui'
import { Button } from '../Button'
import FeatherIcon from '../FeatherIcon.vue'
import { ref, computed, useAttrs } from 'vue'
import { useRouter } from 'vue-router'
import type {
  DropdownProps,
  DropdownOption,
  DropdownGroupOption,
  DropdownOptions,
  DropdownItem,
} from './types'
import Switch from '../Switch/Switch.vue'
import { Next } from '../icons/icons'

defineOptions({
  inheritAttrs: false,
})

const toggleState = ref(false)
const test = ref(true)
const router = useRouter()
const attrs = useAttrs()

const props = withDefaults(defineProps<DropdownProps>(), {
  options: () => [],
  placement: 'left',
  side: 'bottom',
  offset: 4,
})

function close() {
  toggleState.value = false
}

// Unified click handling for all dropdown items
const handleItemClick = (item: DropdownOption, event: PointerEvent) => {
  if (item.route) {
    router.push(item.route)
  } else if (item.onClick) {
    item.onClick(event)
  }
}

const normalizeDropdownItem = (option: DropdownOption) => {
  return {
    ...option,
    label: option.label,
    theme: option.theme || 'gray',
    icon: option.icon,
    component: option.component,
    onClick: (event: PointerEvent) => handleItemClick(option, event),
    submenu: option.submenu,
  }
}

const getIconColor = (item: DropdownItem) =>
  item.theme === 'red' ? 'text-ink-red-3' : ''
const getTextColor = (item: DropdownItem) =>
  item.theme === 'red' ? 'text-ink-red-3' : ''
const getBackgroundColor = (item: DropdownItem) =>
  item.theme === 'red'
    ? 'data-[highlighted]:bg-surface-red-3'
    : 'data-[highlighted]:bg-custom-blue data-[highlighted]:text-custom-main data-[highlighted]:font-semibold'
const getSubmenuBackgroundColor = (item: DropdownItem) =>
  item.theme === 'red'
    ? 'data-[highlighted]:bg-surface-red-3 data-[state=open]:bg-surface-red-3'
    : 'data-[highlighted]:bg-custom-blue data-[highlighted]:text-custom-main data-[highlighted]:font-semibold data-[state=open]:bg-custom-blue data-[state=open]:text-custom-main data-[state=open]:font-semibold'

// Unified group processing for both main options and submenu options
const processOptionsIntoGroups = (
  options: DropdownOptions,
): DropdownGroupOption[] => {
  let groups: DropdownGroupOption[] = []
  let currentGroup: DropdownGroupOption | null = null
  let i = 0

  for (let option of options) {
    if (option == null) {
      continue
    }

    if ('group' in option) {
      if (currentGroup) {
        groups.push(currentGroup)
        currentGroup = null
      }
      let groupOption = {
        key: i,
        ...option,
        items: filterOptions(option.items),
      } as DropdownGroupOption
      groups.push(groupOption)
    } else {
      if (!currentGroup) {
        currentGroup = {
          key: i,
          group: '',
          hideLabel: true,
          items: [],
        } as DropdownGroupOption
      }
      currentGroup.items.push(...filterOptions([option]))
    }
    i++
  }

  if (currentGroup) {
    groups.push(currentGroup)
  }

  return groups
}

const getSubmenuGroups = (submenuOptions: DropdownOptions) => {
  return processOptionsIntoGroups(submenuOptions)
}

const filterOptions = (options: DropdownOption[]) => {
  return (options || [])
    .filter(Boolean)
    .filter((option) => (option.condition ? option.condition() : true))
    .map((option) => normalizeDropdownItem(option))
}

// Check if any item in a group has an icon
const groupHasIcons = (group: DropdownGroupOption) => {
  return group.items.some((item) => item.icon)
}

// Semantic CSS classes for consistent styling
const cssClasses = {
  // Container classes
  dropdownContent:
    'min-w-40 rounded-[0.75rem] bg-white shadow-custom-card-shadow-1 focus:outline-none dropdown-content',
  groupContainer: 'p-[0.375rem]',

  // Label classes
  groupLabel: 'flex h-7 items-center px-[0.75rem] text-sm font-medium text-ink-gray-5',
  itemLabel: 'whitespace-nowrap',

  // Icon classes
  itemIcon: 'mr-2 h-4 w-4 flex-shrink-0',
  itemIconPlaceholder: 'mr-2 h-4 w-4 flex-shrink-0',
  chevronIcon: 'ml-auto h-7ed w-7 flex-shrink-0 pl-3',

  // Button classes
  itemButton:
    'group flex h-[2.438rem] w-full items-center gap-3 rounded-[0.75rem] px-[0.75rem] text-base text-custom-input-active transition-[background-color,color,font-weight] focus:outline-none focus-visible:outline-none focus:ring-0',
  submenuTrigger:
    'group flex h-[2.438rem] w-full items-center gap-3 rounded-[0.75rem] px-[0.75rem] text-base text-custom-input-active transition-[background-color,color,font-weight] focus:outline-none focus-visible:outline-none focus:ring-0',
}

const groups = computed(() => {
  return processOptionsIntoGroups(props.options)
})

const align = computed(() => {
  if (props.placement === 'left') return 'start' as const
  if (props.placement === 'right') return 'end' as const
  if (props.placement === 'center') return 'center' as const
  return 'start' as const
})
</script>

<style scoped>
@keyframes dropdown-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes dropdown-out {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}

:global(.dropdown-content[data-state='open']) {
  animation: dropdown-in 100ms ease-out;
}

:global(.dropdown-content[data-state='closed']) {
  animation: dropdown-out 75ms ease-in;
}
</style>
