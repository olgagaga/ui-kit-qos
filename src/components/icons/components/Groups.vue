<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_155_1783)">
<rect width="27" height="27" rx="6" fill="url(#paint0_linear_155_1783)"/>
<g filter="url(#filter0_dd_155_1783)">
<path d="M15.3267 15.8608C15.9598 15.8608 16.473 16.374 16.473 17.0071L16.4723 17.6374C16.5488 19.0714 15.4825 19.797 13.569 19.797C11.6635 19.797 10.5775 19.0831 10.5775 17.6622V17.0071C10.5775 16.374 11.0907 15.8608 11.7238 15.8608H15.3267ZM8.12097 12.5854L10.9875 12.5855C10.9336 12.7949 10.905 13.0143 10.905 13.2405C10.905 13.9712 11.2041 14.6321 11.6866 15.1074L11.7928 15.2064L11.7238 15.2057C11.5264 15.2057 11.3364 15.2375 11.1587 15.2961C10.5922 15.4831 10.1501 15.9436 9.9887 16.5212L9.96615 16.5217C8.06061 16.5217 6.97461 15.8078 6.97461 14.3869V13.7318C6.97461 13.0987 7.48785 12.5854 8.12097 12.5854ZM18.9295 12.5854C19.5626 12.5854 20.0759 13.0987 20.0759 13.7318L20.0752 14.362C20.1516 15.796 19.0854 16.5217 17.1718 16.5217L17.0616 16.5206C16.9051 15.9612 16.4853 15.5118 15.9443 15.3144C15.7902 15.2581 15.6262 15.2223 15.4557 15.2102L15.3267 15.2057L15.2577 15.2064C15.8021 14.7262 16.1455 14.0234 16.1455 13.2405C16.1455 13.0143 16.1169 12.7949 16.063 12.5855L18.9295 12.5854ZM13.5252 11.2753C14.6106 11.2753 15.4904 12.1552 15.4904 13.2405C15.4904 14.3259 14.6106 15.2057 13.5252 15.2057C12.4399 15.2057 11.5601 14.3259 11.5601 13.2405C11.5601 12.1552 12.4399 11.2753 13.5252 11.2753ZM9.92239 8C11.0077 8 11.8876 8.87985 11.8876 9.96519C11.8876 11.0505 11.0077 11.9304 9.92239 11.9304C8.83705 11.9304 7.9572 11.0505 7.9572 9.96519C7.9572 8.87985 8.83705 8 9.92239 8ZM17.1281 8C18.2135 8 19.0933 8.87985 19.0933 9.96519C19.0933 11.0505 18.2135 11.9304 17.1281 11.9304C16.0427 11.9304 15.1629 11.0505 15.1629 9.96519C15.1629 8.87985 16.0427 8 17.1281 8Z" fill="url(#paint1_linear_155_1783)"/>
</g>
</g>
<defs>
<filter id="filter0_dd_155_1783" x="4.46179" y="5.48718" width="18.13" height="19.3355" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2.51282"/>
<feGaussianBlur stdDeviation="1.25641"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_155_1783"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.25641"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.92549 0 0 0 0 0.819608 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_155_1783" result="effect2_dropShadow_155_1783"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_155_1783" result="shape"/>
</filter>
<linearGradient id="paint0_linear_155_1783" x1="27" y1="28.7089" x2="-1.70886" y2="13.3291" gradientUnits="userSpaceOnUse">
<stop stop-color="#001356"/>
<stop offset="0.481194" stop-color="#061E70"/>
<stop offset="1" stop-color="#001041"/>
</linearGradient>
<linearGradient id="paint1_linear_155_1783" x1="13.5268" y1="8" x2="13.5268" y2="19.797" gradientUnits="userSpaceOnUse">
<stop stop-color="#ECE1D1"/>
<stop offset="1" stop-color="#FFE0B3"/>
</linearGradient>
<clipPath id="clip0_155_1783">
<rect width="27" height="27" fill="white"/>
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
