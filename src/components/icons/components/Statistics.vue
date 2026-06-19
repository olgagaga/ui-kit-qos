<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_statistics)">
      <g clip-path="url(#clip1_statistics)">
        <!-- <rect width="27" height="27" rx="6" fill="#4D73FB" /> -->
        <rect
          x="0"
          y="0"
          width="27"
          height="27"
          fill="url(#pattern0_statistics)"
        />
      </g>
    </g>
    <defs>
      <pattern
        id="pattern0_statistics"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_statistics" transform="scale(0.000976562)" />
      </pattern>
      <clipPath id="clip0_statistics">
        <rect width="27" height="27" fill="white" />
      </clipPath>
      <clipPath id="clip1_statistics">
        <rect width="27" height="27" rx="6" fill="white" />
      </clipPath>
      <image
        id="image0_statistics"
        width="1024"
        height="1024"
        preserveAspectRatio="none"
        xlink:href="data:image/webp;base64,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"
      />
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
  color: '#4D73FB',
  class: '',
})

const className = props.class
</script>
