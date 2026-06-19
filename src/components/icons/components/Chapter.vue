<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g clip-path="url(#clip0_264_2572)">
      <g clip-path="url(#clip1_264_2572)">
        <rect width="27" height="27" rx="6" fill="#4D73FB" />
        <rect
          x="-6"
          y="-5.96204"
          width="39"
          height="39"
          fill="url(#pattern0_264_2572)"
        />
      </g>
    </g>
    <defs>
      <pattern
        id="pattern0_264_2572"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_264_2572" transform="scale(0.000976562)" />
      </pattern>
      <clipPath id="clip0_264_2572">
        <rect width="27" height="27" fill="white" />
      </clipPath>
      <clipPath id="clip1_264_2572">
        <rect width="27" height="27" rx="6" fill="white" />
      </clipPath>
      <image
        id="image0_264_2572"
        width="1024"
        height="1024"
        preserveAspectRatio="none"
        xlink:href="data:image/webp;base64,UklGRiICAABXRUJQVlA4IBYCAABwDgCdASpgAGAAPmEuk0YkIqGhLHbYYIAMCUB2A6c5FvASgDBZv2A99X0AbxyCNLv/zpUm7BJ+Xzm35d8BAVw5kG1K41XifVWcUvL5z3ryDGGOPB/LO5Sgl6ZQp22ezq+R0yv3rzKAFkBCkyXeRW58rhSFduV7K+2fs1vQAP78Z7L0RRR6WpfVjLD3nfvrx/2XOIGtoS/GVhQ6O/H4dWI34N2LMwvD5xhtq1rzjIrEOV8pczbZ78J1Zg7261Xn+13KolbsoZs+MeCZKxI4nFd1BywQMNhb+hu5P3lf/t//9v91Uv83C85/TL3+TOAvZS3pUQWmzFVZVzd9H+tPu+j/WqP5SIfiXvlXpctfas19v8FSnkAn6NfF+c2Y36JZkCuSgP3Mw67MW5nxuSAFfhQySAQHYV9ZFsxR17zHr3q5GJjVy9ngXSjXgGnCX7u9axQ8lHh+6X7qH7kL04XLb4OzC7vl7LHcrzmr3IfTdk4UNIcZ2frE7qQIU67DKM2eEhFH+QhX4U+HNnkHYGYsiAHHPJeI8SMtuGc38zzrD4FipajVrei3ks4cLqN+6mVQ5hTkUVuSd+MJ7HbA0aqlmqZupnHJvtmTBCn0RHD68m+AgY+rC0akK8uG4j62c/DqyouqjZvPS6DfvCOvJDvRs/LZeBKhnYxVgCUz/Cb4i2ICyFSRX2MA9ezqfl6qFgipVX1iA+AAAAA="
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
  color: 'currentColor',
  class: '',
})

const className = props.class
</script>
