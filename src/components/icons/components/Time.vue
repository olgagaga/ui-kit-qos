<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_580_6070)">
<g clip-path="url(#clip1_580_6070)">
<path d="M8.00004 14.6667C11.682 14.6667 14.6667 11.682 14.6667 8.00004C14.6667 4.31804 11.682 1.33337 8.00004 1.33337C4.31804 1.33337 1.33337 4.31804 1.33337 8.00004C1.33337 11.682 4.31804 14.6667 8.00004 14.6667Z" :stroke="color" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M8.00269 4V8.00333L10.829 10.83" :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<defs>
<clipPath id="clip0_580_6070">
<rect width="16" height="16" fill="white"/>
</clipPath>
<clipPath id="clip1_580_6070">
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
