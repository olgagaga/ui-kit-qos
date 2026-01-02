<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_199_7303)">
<path d="M9 2C9 1.73478 8.89464 1.48043 8.70711 1.29289C8.51957 1.10536 8.26522 1 8 1C7.73478 1 7.48043 1.10536 7.29289 1.29289C7.10536 1.48043 7 1.73478 7 2V7H2C1.73478 7 1.48043 7.10536 1.29289 7.29289C1.10536 7.48043 1 7.73478 1 8C1 8.26522 1.10536 8.51957 1.29289 8.70711C1.48043 8.89464 1.73478 9 2 9H7V14C7 14.2652 7.10536 14.5196 7.29289 14.7071C7.48043 14.8946 7.73478 15 8 15C8.26522 15 8.51957 14.8946 8.70711 14.7071C8.89464 14.5196 9 14.2652 9 14V9H14C14.2652 9 14.5196 8.89464 14.7071 8.70711C14.8946 8.51957 15 8.26522 15 8C15 7.73478 14.8946 7.48043 14.7071 7.29289C14.5196 7.10536 14.2652 7 14 7H9V2Z" :fill="color"/>
</g>
<defs>
<clipPath id="clip0_199_7303">
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
