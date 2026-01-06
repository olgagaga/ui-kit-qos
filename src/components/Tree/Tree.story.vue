<template>
  <Story :layout="{ type: 'grid', width: 500 }">
    <Variant title="default">
      <Tree
        :options="{
          showIndentationGuides: state.showIndentationGuides,
          rowHeight: state.rowHeight,
          indentWidth: state.indentWidth,
        }"
        nodeKey="name"
        :node="state.node"
      />
    </Variant>
    <Variant title="with icons">
      <Tree
        :options="{
          showIndentationGuides: true,
          defaultCollapsed: true,
          indentWidth: '37px',
        }"
        nodeKey="name"
        :node="stateWithIcons.node"
        :selectedNode="stateWithIcons.selectedNode"
        @select="stateWithIcons.selectedNode = $event"
      />
    </Variant>
    <template #controls>
      <HstCheckbox
        v-model="state.showIndentationGuides"
        title="Show Indentation Guides"
      />
      <HstText v-model="state.rowHeight" title="Row Height" />
      <HstText v-model="state.indentWidth" title="Indent Width" />
    </template>
  </Story>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Tree from './Tree.vue'
import PracticeIcon from '../icons/components/Practice.vue'
import CoursesIcon from '../icons/components/Courses.vue'
import StudentIcon from '../icons/components/Student.vue'

const state = reactive({
  showIndentationGuides: true,
  rowHeight: '25px',
  indentWidth: '15px',
  node: {
    name: 'guest',
    label: 'Guest',
    children: [
      {
        name: 'downloads',
        label: 'Downloads',
        children: [
          {
            name: 'download.zip',
            label: 'download.zip',
            children: [
              {
                name: 'image.png',
                label: 'image.png',
                children: [],
              },
            ],
          },
        ],
      },
      {
        name: 'documents',
        label: 'Documents',
        children: [
          {
            name: 'somefile.txt',
            label: 'somefile.txt',
            children: [],
          },
          {
            name: 'somefile.pdf',
            label: 'somefile.pdf',
            children: [],
          },
        ],
      },
    ],
  },
})

const stateWithIcons = reactive({
  selectedNode: null as any,
  node: {
    name: 'root',
    label: 'Root',
    children: [
      {
        name: 'practice',
        label: 'Practice',
        icon: PracticeIcon,
        children: [
          {
            name: 'exercise1',
            label: 'Exercise 1',
            children: [],
          },
          {
            name: 'exercise2',
            label: 'Exercise 2',
            children: [],
          },
        ],
      },
      {
        name: 'courses',
        label: 'Courses',
        icon: CoursesIcon,
        children: [
          {
            name: 'course1',
            label: 'Introduction to Programming',
            children: [],
          },
          {
            name: 'course2',
            label: 'Advanced JavaScript',
            children: [],
          },
        ],
      },
      {
        name: 'students',
        label: 'Students',
        icon: StudentIcon,
        children: [
          {
            name: 'student1',
            label: 'John Doe',
            children: [],
          },
          {
            name: 'student2',
            label: 'Jane Smith',
            children: [],
          },
        ],
      },
    ],
  },
})
</script>
