<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_581_6248)">
<path d="M10.6667 1.33337V4.00004M5.33333 1.33337V4.00004M14 8.00004C14 5.48604 14 4.22871 13.2187 3.44804C12.4373 2.66737 11.1807 2.66671 8.66667 2.66671H7.33333C4.81933 2.66671 3.562 2.66671 2.78133 3.44804C2.00067 4.22937 2 5.48604 2 8.00004V9.33337C2 11.8474 2 13.1047 2.78133 13.8854C3.56267 14.666 4.81933 14.6667 7.33333 14.6667M2 6.66671H14" :stroke="color" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.178 12.4674L11.3333 12V10.8447M14 12C14 12.7073 13.719 13.3856 13.2189 13.8857C12.7188 14.3858 12.0405 14.6667 11.3333 14.6667C10.626 14.6667 9.94777 14.3858 9.44767 13.8857C8.94758 13.3856 8.66663 12.7073 8.66663 12C8.66663 11.2928 8.94758 10.6145 9.44767 10.1144C9.94777 9.61433 10.626 9.33337 11.3333 9.33337C12.0405 9.33337 12.7188 9.61433 13.2189 10.1144C13.719 10.6145 14 11.2928 14 12Z" :stroke="color" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_581_6248">
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
