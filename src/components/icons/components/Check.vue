<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.32184 11.0814L2.42224 8.32189C2.266 8.17319 2.05409 8.08966 1.83313 8.08966C1.61217 8.08966 1.40026 8.17319 1.24402 8.32189C1.08778 8.47058 1 8.67226 1 8.88255C1 8.98667 1.02155 9.08977 1.06342 9.18597C1.10529 9.28217 1.16665 9.36958 1.24402 9.4432L4.73691 12.7674C5.0628 13.0775 5.58924 13.0775 5.91513 12.7674L14.756 4.35355C14.9122 4.20485 15 4.00318 15 3.79289C15 3.5826 14.9122 3.38093 14.756 3.23223C14.5997 3.08354 14.3878 3 14.1669 3C13.9459 3 13.734 3.08354 13.5778 3.23223L5.32184 11.0814Z"
      :fill="color"
    />
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
