<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_150_1772)">
      <g clip-path="url(#clip1_150_1772)">
        <rect width="27" height="27" rx="6" fill="#4D73FB" />
        <g clip-path="url(#clip2_150_1772)">
          <rect width="27" height="27" rx="6" fill="white" />
          <rect
            x="-5.02539"
            y="-6"
            width="38"
            height="38"
            fill="url(#pattern0_150_1772)"
          />
        </g>
      </g>
    </g>
    <defs>
      <pattern
        id="pattern0_150_1772"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_150_1772" transform="scale(0.000976562)" />
      </pattern>
      <clipPath id="clip0_150_1772">
        <rect width="27" height="27" fill="white" />
      </clipPath>
      <clipPath id="clip1_150_1772">
        <rect width="27" height="27" rx="6" fill="white" />
      </clipPath>
      <clipPath id="clip2_150_1772">
        <rect width="27" height="27" rx="6" fill="white" />
      </clipPath>
      <image
        id="image0_150_1772"
        width="1024"
        height="1024"
        preserveAspectRatio="none"
        xlink:href="data:image/webp;base64,UklGRt4CAABXRUJQVlA4INICAAAQEACdASpgAGAAPmEsk0akJSGhKrapAKAMCUAZAL8fx9Yv9APJV37PmA/Wz1o9NA59D2jwUdV0PAiibUo9wBGgkMQZyX/ZckqIaQmRUcmXIDjYRqF32W0HAYrnTxscORr3DQnmYLAyo0vNRhuoe+c/47bnrL5sPCsFogIjZhMHHn/gUCOYGLniAAD+/H/OzROE8efrFry0xC7NLg7ziFDSHRVkIKxe9djjUcshig7g6MdblhfsDEQ+9/VOOrJlSbLWth9BW2YDV+epTJLBDCxeFeMETDuQ2/Q8bDcdd6CdZIZ3GLKmz2Zczrt54WOvSjx+ESc5CHfDRxPiOO4KGggfhcZrMCK76BztbUTK6xLnz4cwNsm7OHAuaZVajZ1a4yCy7vqa1M42Mjrbkn4wC5CffggP+f2pcg5yGNziAiER3vp/+m88tk4LIyVltEaQkBUdfAwCMc3c6+7h3EKwK9vCuMshenWDnMik31FkDFqW4+G12lg627gTukgo/rkFZh4sCP35xf/yCdZnPFqAjL6kz7KEhF2lD99DRqeFkD/Zoxptfdhji9/tcShlLaDHBQmc0AJnv5uXYkaZnA5BmMo+xtqRMzqLzyCs0RfYTYPthEIx8T/Yqw66VL7S/x06X64td2cx7Xn7Vl4NdKMgf+gt7sT9cz+GckyJ97Od/+1XOyMl5EBeMcTKgHJpmJpHh123xUmxkjuElld+VxFpx25B/vQz4EaSfDqwr889UcC7F6WC8FKbhUkD6c/YedW5m8Fpp7ujudtjkXRZ1l/siw0IX7rgm88Pyb9iU+kK/ZJ6VdmCpvkGxhEsNIZFH/IKVivaEVtho24kL2JBUX1xKpvxIxHZDtNyYGpzehwqSL5l9WcToqX+kVvXk9071ldVSm9llQCn8yHmETLalU28cJVcc53UiSPaPdteBC2K1ov6v29VQrKJjdmzZc0shcSis3AAAA=="
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
