<script setup lang="ts">
import { ref } from 'vue'
import * as CustomIcons from './icons'

// Get all icon names
const iconNames = Object.keys(CustomIcons)

// State for customization
const iconSize = ref(24)
const iconColor = ref('#000000')
</script>

<template>
  <Story title="Custom Icons" :layout="{ type: 'grid', width: '100%' }">
    <Variant title="All Custom Icons">
      <div class="p-8">
        <div class="mb-6 space-y-4">
          <h2 class="text-2xl font-semibold">Custom Icons Library</h2>
          <p class="text-gray-600">Total icons: {{ iconNames.length }}</p>

          <!-- Controls -->
          <div class="flex gap-4 items-center">
            <div class="flex items-center gap-2">
              <label class="text-sm font-medium">Size:</label>
              <input
                v-model.number="iconSize"
                type="number"
                min="16"
                max="128"
                class="w-20 px-2 py-1 border rounded"
              />
            </div>
            <div class="flex items-center gap-2">
              <label class="text-sm font-medium">Color:</label>
              <input
                v-model="iconColor"
                type="color"
                class="w-16 h-8 border rounded cursor-pointer"
              />
            </div>
          </div>
        </div>

        <!-- Icons Grid -->
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          <div
            v-for="iconName in iconNames"
            :key="iconName"
            class="flex flex-col items-center gap-2 p-4 border rounded-lg hover:bg-gray-50 transition-colors min-w-0"
          >
            <component
              :is="CustomIcons[iconName]"
              :size="iconSize"
              :color="iconColor"
              class="flex-shrink-0"
            />
            <span
              class="text-xs text-center text-gray-700 font-mono break-words w-full"
            >
              {{ iconName }}
            </span>
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-if="iconNames.length === 0"
          class="text-center py-12 text-gray-500"
        >
          <p class="text-lg mb-2">No custom icons yet</p>
          <p class="text-sm">
            Add your SVG icons to
            <code class="px-2 py-1 bg-gray-100 rounded"
              >src/components/icons/</code
            >
          </p>
        </div>
      </div>
    </Variant>

    <Variant title="Usage Example">
      <div class="p-8 space-y-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">Using Custom Icons</h3>

          <div class="space-y-4">
            <div>
              <h4 class="text-sm font-medium mb-2">In frappe-ui components:</h4>
              <pre
                class="bg-gray-100 p-4 rounded text-xs overflow-x-auto"
              ><code>&lt;script setup&gt;
import { ExampleIcon } from '@/components/icons'
&lt;/script&gt;

&lt;template&gt;
  &lt;ExampleIcon size="24" color="#0289F7" /&gt;
&lt;/template&gt;</code></pre>
            </div>

            <div>
              <h4 class="text-sm font-medium mb-2">
                When frappe-ui is used as a library:
              </h4>

              <pre
                class="bg-gray-100 p-4 rounded text-xs overflow-x-auto"
              ><code>&lt;script setup&gt;
import { ExampleIcon } from 'frappe-ui'
// or
import { ExampleIcon } from 'frappe-ui/icons'
&lt;/script&gt;

&lt;template&gt;
  &lt;ExampleIcon size="32" class="text-blue-500" /&gt;
&lt;/template&gt;</code></pre>
            </div>

            <div>
              <h4 class="text-sm font-medium mb-2">With Tailwind classes:</h4>
              <pre
                class="bg-gray-100 p-4 rounded text-xs overflow-x-auto"
              ><code>&lt;template&gt;
  &lt;ExampleIcon
    size="24"
    class="text-red-500 hover:text-red-700"
  /&gt;
&lt;/template&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </Variant>
  </Story>
</template>
