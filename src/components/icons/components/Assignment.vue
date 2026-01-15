<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.75 15.5002H13.25C14.0773 15.5002 14.75 14.8274 14.75 14.0002V2.75018C14.75 1.92293 14.0773 1.25018 13.25 1.25018H11.75C11.75 1.05127 11.671 0.860505 11.5303 0.719853C11.3897 0.579201 11.1989 0.500183 11 0.500183H5C4.80109 0.500183 4.61032 0.579201 4.46967 0.719853C4.32902 0.860505 4.25 1.05127 4.25 1.25018H2.75C1.92275 1.25018 1.25 1.92293 1.25 2.75018V14.0002C1.25 14.8274 1.92275 15.5002 2.75 15.5002ZM2.75 2.75018H4.25V4.25018H11.75V2.75018H13.25V14.0002H2.75V2.75018Z"
      :fill="color"
    />
    <path
      d="M7.24998 9.18966L5.90523 7.84491L4.84473 8.90541L7.24998 11.3107L11.1552 7.40541L10.0947 6.34491L7.24998 9.18966Z"
      :fill="color"
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

const className = props.class
</script>
