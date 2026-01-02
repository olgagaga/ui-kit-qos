<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_503_2763)">
<path d="M3 5C1.34315 5 0 6.34315 0 8C0 9.65685 1.34315 11 3 11H13C14.6569 11 16 9.65685 16 8C16 6.34315 14.6569 5 13 5H3ZM15 8C15 9.10457 14.1046 10 13 10H3C1.89543 10 1 9.10457 1 8C1 6.89543 1.89543 6 3 6H13C14.1046 6 15 6.89543 15 8Z" :fill="color"/>
<path d="M2 8C2 7.44772 2.44772 7 3 7H8C8.55228 7 9 7.44772 9 8C9 8.55228 8.55228 9 8 9H3C2.44772 9 2 8.55228 2 8Z" :fill="color"/>
</g>
<defs>
<clipPath id="clip0_503_2763">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
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
