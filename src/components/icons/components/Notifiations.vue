<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_148_1470)">
<path d="M12.5 4.99976C12.5 3.80628 12.0259 2.66169 11.182 1.81778C10.3381 0.973862 9.19347 0.499756 8 0.499756C6.80653 0.499756 5.66193 0.973862 4.81802 1.81778C3.97411 2.66169 3.5 3.80628 3.5 4.99976C3.5 10.2498 1.25 11.7498 1.25 11.7498H14.75C14.75 11.7498 12.5 10.2498 12.5 4.99976Z" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.29739 14.75C9.16553 14.9773 8.97627 15.166 8.74856 15.2971C8.52085 15.4283 8.26268 15.4973 7.99989 15.4973C7.73711 15.4973 7.47893 15.4283 7.25122 15.2971C7.02351 15.166 6.83425 14.9773 6.70239 14.75" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_148_1470">
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
