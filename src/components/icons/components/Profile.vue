<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_113_178)">
<path d="M1.14282 12.8098C1.14282 11.9258 1.49401 11.0779 2.11913 10.4528C2.74425 9.82769 3.5921 9.4765 4.47615 9.4765H11.1428C12.0269 9.4765 12.8747 9.82769 13.4998 10.4528C14.1249 11.0779 14.4761 11.9258 14.4761 12.8098C14.4761 13.2519 14.3005 13.6758 13.988 13.9883C13.6754 14.3009 13.2515 14.4765 12.8095 14.4765H2.80949C2.36746 14.4765 1.94354 14.3009 1.63098 13.9883C1.31842 13.6758 1.14282 13.2519 1.14282 12.8098Z" :stroke="color" stroke-linejoin="round"/>
<path d="M7.80957 6.14297C9.19028 6.14297 10.3096 5.02368 10.3096 3.64297C10.3096 2.26226 9.19028 1.14297 7.80957 1.14297C6.42886 1.14297 5.30957 2.26226 5.30957 3.64297C5.30957 5.02368 6.42886 6.14297 7.80957 6.14297Z" :stroke="color"/>
</g>
<defs>
<clipPath id="clip0_113_178">
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
