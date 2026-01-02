<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_287_4359)">
<path d="M2.75 15.5002H13.25C14.0773 15.5002 14.75 14.8275 14.75 14.0002V2.75024C14.75 1.92299 14.0773 1.25024 13.25 1.25024H11.75C11.75 1.05133 11.671 0.860566 11.5303 0.719914C11.3897 0.579262 11.1989 0.500244 11 0.500244H5C4.80109 0.500244 4.61032 0.579262 4.46967 0.719914C4.32902 0.860566 4.25 1.05133 4.25 1.25024H2.75C1.92275 1.25024 1.25 1.92299 1.25 2.75024V14.0002C1.25 14.8275 1.92275 15.5002 2.75 15.5002ZM2.75 2.75024H4.25V4.25024H11.75V2.75024H13.25V14.0002H2.75V2.75024Z" :fill="color"/>
<path d="M7.24998 9.18972L5.90523 7.84497L4.84473 8.90547L7.24998 11.3107L11.1552 7.40547L10.0947 6.34497L7.24998 9.18972Z" :fill="color"/>
</g>
<defs>
<clipPath id="clip0_287_4359">
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
