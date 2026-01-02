<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_150_1590)">
      <g filter="url(#filter0_i_150_1590)">
        <path
          d="M5.26839 4.52838L7.34716 0.39785C7.40767 0.278311 7.50074 0.177768 7.61592 0.107496C7.73111 0.0372233 7.86385 0 7.99928 0C8.1347 0 8.26745 0.0372233 8.38264 0.107496C8.49782 0.177768 8.59088 0.278311 8.6514 0.39785L10.7302 4.52838L15.3774 5.1947C15.5114 5.21304 15.6376 5.26819 15.7414 5.35387C15.8452 5.43954 15.9225 5.55228 15.9644 5.67922C16.0064 5.80616 16.0113 5.94218 15.9787 6.07177C15.9461 6.20135 15.8772 6.31927 15.7799 6.41207L12.4177 9.62523L13.2114 14.1647C13.313 14.7473 12.6889 15.191 12.1552 14.9163L7.99928 12.7721L3.84253 14.9163C3.30964 15.1918 2.68553 14.7473 2.78715 14.1639L3.58089 9.62444L0.218686 6.41128C0.121857 6.31842 0.0533747 6.20061 0.0210217 6.07126C-0.0113313 5.94191 -0.00625679 5.8062 0.0356684 5.67955C0.0775935 5.5529 0.154688 5.4404 0.258188 5.35483C0.361688 5.26926 0.487443 5.21405 0.621158 5.19549L5.26839 4.52838Z"
          fill="#FFC107"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_i_150_1590"
        x="0"
        y="0"
        width="16"
        height="17"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_150_1590"
        />
      </filter>
      <clipPath id="clip0_150_1590">
        <rect width="16" height="16" fill="white" />
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
  color: '#FFC107',
  class: '',
})

const className = props.class
</script>
