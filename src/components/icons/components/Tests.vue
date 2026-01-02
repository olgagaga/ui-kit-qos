<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_155_1789)">
<rect width="27" height="27" rx="6" fill="url(#paint0_radial_155_1789)"/>
<g clip-path="url(#clip1_155_1789)">
<g filter="url(#filter0_dd_155_1789)">
<path d="M20.8913 10.9471L12.4917 19.3467C12.2954 19.5428 12.0293 19.653 11.7518 19.653C11.4743 19.653 11.2082 19.5428 11.0119 19.3467L6.32675 14.6366C6.13081 14.4404 6.02075 14.1744 6.02075 13.8971C6.02075 13.6198 6.13081 13.3538 6.32675 13.1575L7.63509 11.8492C7.83126 11.6538 8.09682 11.5442 8.37366 11.5442C8.65049 11.5442 8.91605 11.6538 9.11222 11.8492L11.778 14.4345L18.1078 8.18254C18.3039 7.987 18.5696 7.8772 18.8466 7.8772C19.1236 7.8772 19.3893 7.987 19.5855 8.18254L20.8906 9.46079C20.9888 9.55805 21.0667 9.67378 21.1199 9.80131C21.1731 9.92883 21.2005 10.0656 21.2005 10.2038C21.2006 10.342 21.1733 10.4788 21.1202 10.6064C21.0671 10.7339 20.9893 10.8497 20.8913 10.9471Z" fill="url(#paint1_linear_155_1789)"/>
</g>
</g>
</g>
<defs>
<filter id="filter0_dd_155_1789" x="3.50793" y="5.36438" width="20.2055" height="19.3142" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.51282"/>
<feGaussianBlur stdDeviation="1.25641"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_155_1789"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.25641"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.613746 0 0 0 0 1 0 0 0 0 0.484995 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_155_1789" result="effect2_dropShadow_155_1789"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_155_1789" result="shape"/>
</filter>
<radialGradient id="paint0_radial_155_1789" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(3.93038 10.0823) rotate(60.505) scale(19.4367)">
<stop stop-color="#B7FF9F"/>
<stop offset="1" stop-color="#040F38"/>
</radialGradient>
<linearGradient id="paint1_linear_155_1789" x1="6.79955" y1="10.5823" x2="13.6106" y2="19.653" gradientUnits="userSpaceOnUse">
<stop stop-color="#9DFF7C"/>
<stop offset="0.462627" stop-color="#8DFF67"/>
<stop offset="1" stop-color="#339114"/>
</linearGradient>
<clipPath id="clip0_155_1789">
<rect width="27" height="27" fill="white"/>
</clipPath>
<clipPath id="clip1_155_1789">
<rect width="16.7468" height="16.7468" fill="white" transform="translate(4.97461 5)"/>
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
