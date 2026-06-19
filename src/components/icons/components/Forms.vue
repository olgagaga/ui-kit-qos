<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_forms)">
      <g clip-path="url(#clip1_forms)">
        <rect width="27" height="27" rx="6" fill="#4D73FB" />
        <rect
          x="0"
          y="0"
          width="27"
          height="27"
          fill="url(#pattern0_forms)"
        />
      </g>
    </g>
    <defs>
      <pattern
        id="pattern0_forms"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_forms" transform="scale(0.000976562)" />
      </pattern>
      <clipPath id="clip0_forms">
        <rect width="27" height="27" fill="white" />
      </clipPath>
      <clipPath id="clip1_forms">
        <rect width="27" height="27" rx="6" fill="white" />
      </clipPath>
      <image
        id="image0_forms"
        width="1024"
        height="1024"
        preserveAspectRatio="none"
        xlink:href="data:image/webp;base64,UklGRgIFAABXRUJQVlA4WAoAAAAQAAAAXwAAXwAAQUxQSDACAAABkCRt/9o2n///pcPZx1ufo2S6h+8Rr3QG066wcg5QZgwsy8zM8kj/v76ZCif52mUnIhy5bSNJctKzz+Q4FfsFKJK1+KOFZqs/GM7Ob999+ubjt59hFDlWloui8Oe3j6+f3t0+Pxtt9lvNhdz8lWQBrHWDM0/nPECFT88EvTWgVnonO0nr+HumSrxzzvsk1X6QGc9nRs1O+eF4C7C1EgzQukrSx+l0B6jEu9iTvNQCTEkvjEjvEkoocZ4cL8AWfkdjm95RSM5zpwFTcH/jMSOKKeLjfNVMfS9tvdpbMLXsc9O0FWsCm+lDjCmpmIfTMuYGnSaOt42BxRF6isrzCKzFqSRWJU5OwWL1MxNVEn5eBbrpY92HXSBIH+s+DIDTdLo4nkH9GRNdEj6rN+fazJuttJWr1adXxrM/oFPGcTBUZzhTZ+uc+tPnttXZvqv+RfeeqvP0jTpvPqrz8Zs6335RXL9CdcJInUgfp47jf3/k5Pvf/79X/1ygf67RP5fpnyv1z8X65/p76tzV36vo74W21PdaM/29nP5eUX8vqr/X1d9L6+/VcUbbFzit72v8Bb6Mvq+k74vp+3ow5rauL3nDGMDisK6veihn3E5UfeEpbNbXXlD1teumlvPlG5q+/AYMkK8dxVxBSXBhYayWixgtwJTmOi4p5TqutgBTKZfyQSOX8r5SLgXZSdZ6wZmnIQ9Q86dngu46UPgdFXNBm6NMLuj1fuWC3mRyQcNBtVwQAFZQOCCsAgAAMBAAnQEqYABgAD5hLJFFpCKhlxx8AEAGBKANBSC/7lr8XXKZ35a/0XoG0FP8Q9AH6n/sd75/SAf4DqAPQA8tL2Vv3G9KBoggAJWZ2/DJbRXH3iWUbtG/kiZSuNVqT2TKpqunELkIdEL4ASENBJqgbSIIcS/3K9xFz0ePYd0NFG5vKPCiDqlJCqEAAP5xrqXiXNiKoiYWqqVg5X9TfvwoDxOpo9dLPX40hivLzRjeXjaz/X+j/9ay/1IjuDwLOaPrbtG7CMeTh53MYO7EwSl5vEiu8pWjUVKgqI6cqZ/v5/IJ7oCRoqee4XpH5kVqpsvTe3uX2s8rLHB8QC8t6DyW9QEaeVn/QF0w/xV1+M0wGg9NZmTOAcANxwzAOftY7+HOqM5Dw/Jv3/8Qv318VF787Nob9gS6CAdzpAWSnPXxVTnrdl+fp3b/R7v+ZrrP++jTIgOLbnPn6E+sXFD70rnGk1yaGLQfzl7zAQnAMT2y74itQoXt5MKEQ3xlLEFtQbxnZAHP5XCkQVBnDQr34pG1KMLzrPAWA9Bmt/f/IvyLHDwwnIP4tPr9w+Mok280UqezpZ//6w1U5vgx4pUEV63SJMsjC5EsvrxtF7h/D/JAHnUzkukDeOgjcVAhfaMkuVq53c07RxxhCdJaEs4BAZo82ATdnWKgCpniYPv2Ad3oOKDJHzJ31kN6zlMU/9ysHFIkNL6GhKLjB+gL1d/OB+xIJv/3dLZwA5zLRR2QXkW8loj5ABPlXmwnxYhXoT1m80QP8slLXrPqSQWgmJWTiH8mQzYfPCayY0P5gQAFofie2b825m5UqW1oVeLmgtWJL6OuxfEXvwp6aUmZ7qbCV/riPUujBV3YXZp16jzoR+dxEYuhlmz/mL9vXF+eEPfLPX4FRMhO6ai9hNZNAAAA"
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
