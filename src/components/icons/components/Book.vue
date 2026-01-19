<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_150_1586)">
      <path
        d="M8.00004 4.88869C8.00004 3.66669 7.00004 2.66669 5.77804 2.66669H1.33337V10.6667H5.80537C8.00004 10.6667 8.00004 12.8894 8.00004 12.8894M8.00004 4.88869C8.00004 3.66602 9.00004 2.66669 10.222 2.66669H14.6667V10.6667H10.222C8.00004 10.6667 8.00004 12.8894 8.00004 12.8894M8.00004 4.88869V12.8894M9.25004 13.6387C9.38914 13.3506 9.60583 13.107 9.87576 12.9353C10.1457 12.7636 10.4582 12.6706 10.778 12.6667H14M6.75004 13.6387C6.61348 13.3486 6.39739 13.1033 6.12689 12.9313C5.8564 12.7592 5.54262 12.6674 5.22204 12.6667H2.00004"
        :stroke="color"
        :stroke-width="strokeWidth"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
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
  strokeWidth: '1.14286',
})

const className = props.class
</script>
