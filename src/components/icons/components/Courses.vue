<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_150_1676)">
      <g clip-path="url(#clip1_150_1676)">
        <rect width="27" height="27" rx="6" fill="#4D73FB" />
        <rect
          y="-13.6709"
          width="43.7468"
          height="43.7468"
          fill="url(#pattern0_150_1676)"
        />
      </g>
    </g>
    <defs>
      <pattern
        id="pattern0_150_1676"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_150_1676" transform="scale(0.000976562)" />
      </pattern>
      <clipPath id="clip0_150_1676">
        <rect width="27" height="27" fill="white" />
      </clipPath>
      <clipPath id="clip1_150_1676">
        <rect width="27" height="27" rx="6" fill="white" />
      </clipPath>
      <image
        id="image0_150_1676"
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
