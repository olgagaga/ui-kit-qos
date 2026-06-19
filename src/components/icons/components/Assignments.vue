<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_assignments)">
      <g clip-path="url(#clip1_assignments)">
        <rect width="27" height="27" rx="6" fill="#4D73FB" />
        <rect
          x="0"
          y="0"
          width="27"
          height="27"
          fill="url(#pattern0_assignments)"
        />
      </g>
    </g>
    <defs>
      <pattern
        id="pattern0_assignments"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_assignments" transform="scale(0.000976562)" />
      </pattern>
      <clipPath id="clip0_assignments">
        <rect width="27" height="27" fill="white" />
      </clipPath>
      <clipPath id="clip1_assignments">
        <rect width="27" height="27" rx="6" fill="white" />
      </clipPath>
      <image
        id="image0_assignments"
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
