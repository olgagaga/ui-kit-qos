<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_503_4989)">
<path d="M7.57882 2.18059C7.92289 1.36611 9.07711 1.36611 9.42118 2.18059L10.8664 5.6016C10.9677 5.84145 11.1586 6.03231 11.3984 6.13363L14.8194 7.57882C15.6339 7.92289 15.6339 9.07711 14.8194 9.42118L11.3984 10.8664C11.1586 10.9677 10.9677 11.1586 10.8664 11.3984L9.42118 14.8194C9.07711 15.6339 7.92289 15.6339 7.57882 14.8194L6.13363 11.3984C6.03231 11.1586 5.84145 10.9677 5.6016 10.8664L2.18059 9.42118C1.36611 9.07711 1.36611 7.92289 2.18059 7.57882L5.6016 6.13363C5.84145 6.03231 6.03231 5.84145 6.13363 5.6016L7.57882 2.18059Z" :fill="color"/>
</g>
<defs>
<clipPath id="clip0_503_4989">
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
  color: '#000000',
  class: '',
})

const className = props.class
</script>
