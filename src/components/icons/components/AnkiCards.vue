<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_anki_cards)">
      <g clip-path="url(#clip1_anki_cards)">
        <rect width="27" height="27" rx="6" fill="#4D73FB" />
        <rect
          x="0"
          y="0"
          width="27"
          height="27"
          fill="url(#pattern0_anki_cards)"
        />
      </g>
    </g>
    <defs>
      <pattern
        id="pattern0_anki_cards"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_anki_cards" transform="scale(0.000976562)" />
      </pattern>
      <clipPath id="clip0_anki_cards">
        <rect width="27" height="27" fill="white" />
      </clipPath>
      <clipPath id="clip1_anki_cards">
        <rect width="27" height="27" rx="6" fill="white" />
      </clipPath>
      <image
        id="image0_anki_cards"
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
