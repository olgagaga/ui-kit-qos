<template>
  <component
    :is="list.options.getRowRoute ? 'router-link' : 'div'"
    :class="[
      isSelected || isActive ? 'bg-surface-gray-2' : '',
      isHoverable ? 'cursor-pointer' : '',
      isHoverable
        ? isSelected || isActive
          ? 'hover:bg-surface-gray-3'
          : 'hover:bg-surface-menu-bar'
        : '',
    ]"
    class="flex flex-col transition-all duration-300 ease-in-out rounded-md bg-white border border-custom-input-fill h-[26px] justify-center"
    v-bind="{
      to: list.options.getRowRoute ? list.options.getRowRoute(row) : undefined,
      onClick: (e) => onRowClick(row, e),
    }"
  >
    <component
      :is="list.options.getRowRoute ? 'template' : 'button'"
      class="[all:unset] hover:[all:unset]"
    >
      <div
        class="grid items-center space-x-4 px-2 h-full"
        :style="{
          gridTemplateColumns: getGridTemplateColumns(
            list.columns,
            list.options.selectable,
          ),
        }"
      >
        <div
          v-if="list.options.selectable"
          class="w-fit pr-2 flex"
          @click.stop.prevent
          @dblclick.stop
        >
          <Checkbox
            :modelValue="isSelected"
            class="cursor-pointer duration-300"
            @click.stop="list.toggleRow(row[list.rowKey])"
          />
        </div>
        <div
          v-for="(column, i) in list.columns"
          :key="column.key"
          :class="[
            alignmentMap[column.align],
            'text-black text-[12px] leading-[120%] font-normal',
          ]"
        >
          <slot v-bind="{ idx: i, column, item: row[column.key], isActive }">
            <component
              v-if="list.slots.cell"
              :is="list.slots.cell"
              v-bind="{
                column,
                row,
                item: row[column.key],
                align: column.align,
              }"
            />
            <ListRowItem
              v-else
              :column="column"
              :row="row"
              :item="row[column.key]"
              :align="column.align"
            />
          </slot>
        </div>
      </div>
    </component>
  </component>
</template>

<script setup>
import Checkbox from '../Checkbox/Checkbox.vue'
import ListRowItem from './ListRowItem.vue'
import { alignmentMap, getGridTemplateColumns } from './utils'
import { computed, inject } from 'vue'

const props = defineProps({
  row: {
    type: Object,
    required: true,
  },
})

const list = inject('list')

const isSelected = computed(() => {
  return list.value.selections.has(props.row[list.value.rowKey])
})
const isActive = computed(
  () =>
    list.value.options.enableActive &&
    list.value.activeRow.value === props.row.name,
)

const isHoverable = computed(() => {
  return list.value.options.getRowRoute || list.value.options.onRowClick
})

const onRowClick = (row, e) => {
  if (list.value.options.onRowClick) list.value.options.onRowClick(row, e)
  if (list.value.activeRow.value === row.name) {
    list.value.activeRow.value = null
  } else {
    list.value.activeRow.value = row.name
  }
}
</script>
