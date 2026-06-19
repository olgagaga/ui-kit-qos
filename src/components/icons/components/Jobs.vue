<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_jobs)">
      <g clip-path="url(#clip1_jobs)">
        <rect width="27" height="27" rx="6" fill="#4D73FB" />
        <rect
          x="0"
          y="0"
          width="27"
          height="27"
          fill="url(#pattern0_jobs)"
        />
      </g>
    </g>
    <defs>
      <pattern
        id="pattern0_jobs"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_jobs" transform="scale(0.000976562)" />
      </pattern>
      <clipPath id="clip0_jobs">
        <rect width="27" height="27" fill="white" />
      </clipPath>
      <clipPath id="clip1_jobs">
        <rect width="27" height="27" rx="6" fill="white" />
      </clipPath>
      <image
        id="image0_jobs"
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
