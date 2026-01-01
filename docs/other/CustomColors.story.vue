<script setup lang="ts">
import type { CSSProperties } from 'vue'
import colorsData from '../../src/tailwind/colors.json'

const customColors = colorsData.custom
</script>

<template>
  <Story
    title="Design System/Custom Colors"
    :layout="{ type: 'single', iframe: false }"
    responsive-disabled
  >
    <Variant
      title="Background Color"
      :init-state="() => ({ search: '' })"
    >
      <template #default="{ state }">
        <HstColorShades
          v-for="(color, key) of customColors"
          :key="key"
          :shades="{ DEFAULT: color }"
          :get-name="(shade) => shade === 'DEFAULT' ? `bg-custom-${key}` : `bg-custom-${key}-${shade}`"
          :search="state.search"
        >
          <template #default="{ color }">
            <div
              class="htw-rounded htw-h-[100px]"
              :style="{
                backgroundColor: color,
              } as CSSProperties"
            />
          </template>
        </HstColorShades>
      </template>

      <template #controls="{ state }">
        <HstText
          v-model="state.search"
          title="Filter..."
        />
      </template>
    </Variant>

    <Variant
      title="Text Color"
      :init-state="() => ({ search: '' })"
    >
      <template #default="{ state }">
        <HstColorShades
          v-for="(color, key) of customColors"
          :key="key"
          :shades="{ DEFAULT: color }"
          :get-name="(shade) => shade === 'DEFAULT' ? `text-custom-${key}` : `text-custom-${key}-${shade}`"
          :search="state.search"
        >
          <template #default="{ color }">
            <div
              class="htw-rounded htw-h-[100px] htw-text-5xl htw-flex htw-items-end"
              :style="{
                color,
              } as CSSProperties"
            >
              Aa
            </div>
          </template>
        </HstColorShades>
      </template>

      <template #controls="{ state }">
        <HstText
          v-model="state.search"
          title="Filter..."
        />
      </template>
    </Variant>

    <Variant
      title="Border Color"
      :init-state="() => ({ search: '' })"
    >
      <template #default="{ state }">
        <HstColorShades
          v-for="(color, key) of customColors"
          :key="key"
          :shades="{ DEFAULT: color }"
          :get-name="(shade) => shade === 'DEFAULT' ? `border-custom-${key}` : `border-custom-${key}-${shade}`"
          :search="state.search"
        >
          <template #default="{ color }">
            <div
              class="htw-rounded htw-h-[100px] htw-border-solid htw-border-2"
              :style="{
                borderColor: color,
              } as CSSProperties"
            />
          </template>
        </HstColorShades>
      </template>

      <template #controls="{ state }">
        <HstText
          v-model="state.search"
          title="Filter..."
        />
      </template>
    </Variant>
  </Story>
</template>
