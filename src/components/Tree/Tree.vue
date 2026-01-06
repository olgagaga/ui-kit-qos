<template>
  <div :style="containerStyle">
    <!-- Current Tree Node -->
    <slot
      name="node"
      v-bind="{ node, hasChildren, isCollapsed, toggleCollapsed, isSelected }"
    >
      <div
        class="flex items-center cursor-pointer px-3 rounded-lg transition-colors text-custom-input-header"
        :class="[
          isSelected
            ? 'bg-custom-main shadow-button_shadow_bg text-white'
            : 'bg-white hover:bg-custom-blue hover:text-custom-main hover:font-semibold',
          depth === 0 ? 'mb-3' : 'mb-1.5',
        ]"
        :style="nodeStyle"
        @click="handleClick"
      >
        <!-- slot to only override the label -->
        <slot
          name="label"
          v-bind="{ node, hasChildren, isCollapsed, isSelected }"
        >
          <div class="flex-1 truncate">
            {{ node.label }}
          </div>
        </slot>

        <!-- slot to only override the Icon -->
        <slot name="icon" v-bind="{ hasChildren, isCollapsed }">
          <NextIcon
            v-if="hasChildren && isCollapsed"
            :size="16"
            class="transition-all flex-shrink-0"
            :color="isSelected ? 'white' : 'currentColor'"
          />
          <ArrowDownIcon
            v-else-if="hasChildren && !isCollapsed"
            :size="12"
            class="transition-all flex-shrink-0"
            :color="isSelected ? 'white' : 'currentColor'"
          />
        </slot>
      </div>
    </slot>

    <!-- Recursively render the children -->
    <div v-if="hasChildren && !isCollapsed" class="flex">
      <div
        :style="{
          width: '2px',
          marginLeft: linePadding,
          backgroundColor: 'rgba(10, 42, 158, 0.24)',
        }"
        v-if="options.showIndentationGuides"
      ></div>
      <ul
        class="w-full space-y-1.5"
        :style="{ paddingLeft: options.indentWidth }"
      >
        <li v-for="child in node.children" :key="child[nodeKey] as string">
          <Tree
            :node="child"
            :nodeKey="nodeKey"
            :options="options"
            :depth="depth + 1"
            :selectedNode="selectedNode"
            @select="handleSelect"
          >
            <!-- Pass the parent slots to the children of current node -->
            <template
              #node="{
                node,
                hasChildren,
                isCollapsed,
                toggleCollapsed,
                isSelected,
              }"
            >
              <slot
                name="node"
                v-bind="{
                  node,
                  hasChildren,
                  isCollapsed,
                  toggleCollapsed,
                  isSelected,
                }"
              />
            </template>

            <template #icon="{ hasChildren, isCollapsed }">
              <slot name="icon" v-bind="{ hasChildren, isCollapsed }" />
            </template>

            <template #label="{ node, hasChildren, isCollapsed, isSelected }">
              <slot
                name="label"
                v-bind="{ node, hasChildren, isCollapsed, isSelected }"
              />
            </template>
          </Tree>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import NextIcon from '../icons/components/Next.vue'
import ArrowDownIcon from '../icons/components/ArrowDown.vue'
import type { TreeNode, TreeProps } from './types'

interface ExtendedTreeProps extends TreeProps {
  depth?: number
  selectedNode?: TreeNode | null
}

const props = withDefaults(defineProps<ExtendedTreeProps>(), {
  depth: 0,
  selectedNode: null,
  options: () => ({
    rowHeight: '25px',
    indentWidth: '37px',
    showIndentationGuides: true,
    defaultCollapsed: true,
  }),
})

const emit = defineEmits<{
  select: [node: TreeNode]
}>()

const slots = defineSlots<{
  node: {
    node: TreeNode
    hasChildren: boolean
    isCollapsed: boolean
    toggleCollapsed: (event: MouseEvent) => void
    isSelected: boolean
  }
  icon: {
    hasChildren: boolean
    isCollapsed: boolean
  }
  label: {
    node: TreeNode
    hasChildren: boolean
    isCollapsed: boolean
    isSelected: boolean
  }
}>()

const isCollapsed = ref(props.options.defaultCollapsed ?? true)

const hasChildren = computed(() => props.node.children?.length > 0)

const isSelected = computed(() => {
  // Node is selected if it matches selectedNode OR if it has children and is expanded
  return (
    props.selectedNode === props.node ||
    (hasChildren.value && !isCollapsed.value)
  )
})

// Container style for width control at first level only
const containerStyle = computed(() => {
  const isFirstLevel = props.depth === 0
  return {
    width: isFirstLevel ? '268px' : 'auto',
  }
})

// Calculate node dimensions based on depth
const nodeStyle = computed(() => {
  const isFirstLevel = props.depth === 0
  return {
    height: isFirstLevel ? '39px' : '31px',
  }
})

// Calculate line padding to align with center of the node
const linePadding = computed(() => {
  return '8px' // Approximate center alignment for the vertical line
})

const handleClick = (event: MouseEvent) => {
  event.stopPropagation()
  // Always emit select event so parent can manage selection state
  emit('select', props.node)
  // Toggle collapse state for items with children
  if (hasChildren.value) {
    isCollapsed.value = !isCollapsed.value
  }
}

const handleSelect = (node: TreeNode) => {
  emit('select', node)
}

const toggleCollapsed = (event: MouseEvent) => {
  event.stopPropagation()
  if (hasChildren.value) isCollapsed.value = !isCollapsed.value
}
</script>
