<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_263_2660)">
<path d="M8.01624 1.82812L8.04065 1.83105L8.06311 1.83301H8.26233C8.33672 1.8331 8.3867 1.87048 8.4137 1.93066C8.4416 1.9931 8.43228 2.05417 8.39319 2.10156L8.36389 2.13281C7.54234 2.90091 7.0141 3.932 6.87073 5.04785C6.72671 6.16888 6.98075 7.30523 7.58752 8.25879C8.19425 9.21216 9.11572 9.92318 10.192 10.2676C11.2012 10.5904 12.287 10.5719 13.2819 10.2188L13.4801 10.1436C13.6159 10.0884 13.7528 10.2242 13.6959 10.3613C13.2675 11.3922 12.5669 12.2881 11.6696 12.9521C10.7723 13.6161 9.71118 14.0234 8.60022 14.1318C7.48921 14.2403 6.36975 14.0453 5.36096 13.5674C4.35212 13.0894 3.49144 12.3465 2.8717 11.418C2.25211 10.4895 1.8968 9.40981 1.84241 8.29492C1.78808 7.18002 2.03677 6.07125 2.56311 5.08691C3.08951 4.10247 3.87317 3.279 4.83069 2.70508C5.78611 2.13242 6.87899 1.82965 7.9928 1.82812H8.01624Z" :stroke="color"/>
</g>
<defs>
<clipPath id="clip0_263_2660">
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
