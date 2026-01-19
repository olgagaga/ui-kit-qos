<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_242_1841)">
<g clip-path="url(#clip1_242_1841)">
<path d="M6.00004 6.66683C6.36823 6.66683 6.66671 6.36835 6.66671 6.00016C6.66671 5.63197 6.36823 5.3335 6.00004 5.3335C5.63185 5.3335 5.33337 5.63197 5.33337 6.00016C5.33337 6.36835 5.63185 6.66683 6.00004 6.66683Z" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10.6668C10.3682 10.6668 10.6667 10.3684 10.6667 10.0002C10.6667 9.63197 10.3682 9.3335 10 9.3335C9.63185 9.3335 9.33337 9.63197 9.33337 10.0002C9.33337 10.3684 9.63185 10.6668 10 10.6668Z" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.33336 6.00004C5.33336 7.23772 5.82503 8.4247 6.70019 9.29987C7.57536 10.175 8.76235 10.6667 10 10.6667M4.00003 14.1334C5.51883 15.1246 7.35106 15.5178 9.14284 15.2371C10.9346 14.9565 12.5588 14.0218 13.7018 12.6136C14.8447 11.2054 15.4253 9.42369 15.3314 7.61249C15.2375 5.80129 14.4758 4.08913 13.1934 2.8067C11.9109 1.52427 10.1988 0.762551 8.38758 0.668655C6.57638 0.574759 4.79464 1.15535 3.38647 2.29829C1.9783 3.44124 1.04362 5.06545 0.762935 6.85723C0.482253 8.64901 0.875489 10.4812 1.86669 12L1.33336 14.6667L4.00003 14.1334Z" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<defs>
<clipPath id="clip0_242_1841">
<rect width="16" height="16" fill="white"/>
</clipPath>
<clipPath id="clip1_242_1841">
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
  strokeWidth?: string | number
}

const props = withDefaults(defineProps<IconProps>(), {
  size: '24',
  color: 'currentColor',
  class: '',
  strokeWidth: '1.33333',
})

const className = props.class
</script>
