<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_113_187)">
<path d="M5.1875 5.1875V3.78125C5.1875 3.40829 5.33566 3.0506 5.59938 2.78688C5.8631 2.52316 6.22079 2.375 6.59375 2.375H13.9062C14.2792 2.375 14.6369 2.52316 14.9006 2.78688C15.1643 3.0506 15.3125 3.40829 15.3125 3.78125V12.2188C15.3125 12.5917 15.1643 12.9494 14.9006 13.2131C14.6369 13.4768 14.2792 13.625 13.9062 13.625H6.59375C6.22079 13.625 5.8631 13.4768 5.59938 13.2131C5.33566 12.9494 5.1875 12.5917 5.1875 12.2188V10.8125" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5625 10.8125L11.375 8L8.5625 5.1875M0.6875 8H10.8125" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_113_187">
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
