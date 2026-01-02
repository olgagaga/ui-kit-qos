# Custom Icons

This folder contains custom SVG icon components for the frappe-ui library.

## How to Add a New Icon

1. **Create a new Vue component** for your icon in this folder (e.g., `MyCustomIcon.vue`)

2. **Icon Component Template** - Use this structure:

```vue
<template>
  <svg
    :width="size"
    :height="size"
    :class="classes"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Your SVG path here -->
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
interface IconProps {
  size?: string | number
  color?: string
  class?: string
}

const props = withDefaults(defineProps<IconProps>(), {
  size: '24',
  color: 'currentColor',
  class: '',
})

const classes = props.class
</script>
```

3. **Export your icon** in `icons.ts`:

```typescript
import MyCustomIcon from './MyCustomIcon.vue'
export { MyCustomIcon }
```

## Usage in Components (Internal)

```vue
<script setup>
import { MyCustomIcon } from '@/components/icons'
</script>

<template>
  <MyCustomIcon size="24" color="#000" />
</template>
```

## Usage as Library (External)

When frappe-ui is installed as a library in another project:

```vue
<script setup>
import { MyCustomIcon } from 'frappe-ui/icons'
</script>

<template>
  <MyCustomIcon size="24" class="text-blue-500" />
</template>
```

## Icon Guidelines

- **ViewBox**: Use `viewBox="0 0 24 24"` as the standard size
- **Color**: Use `currentColor` for stroke/fill to allow CSS color control
- **Props**: Support `size`, `color`, and `class` props
- **Naming**: Use PascalCase for component names (e.g., `ChevronDown.vue`)
- **Accessibility**: Add `aria-label` or `aria-hidden="true"` as needed
