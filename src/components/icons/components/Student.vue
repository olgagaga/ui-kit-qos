<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_266_2586)">
      <g clip-path="url(#clip1_266_2586)">
        <!-- <rect width="27" height="27" rx="6" fill="#4D73FB" /> -->
        <rect
          x="-6"
          y="-5"
          width="38"
          height="38"
          fill="url(#pattern0_266_2586)"
        />
      </g>
    </g>
    <defs>
      <pattern
        id="pattern0_266_2586"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_266_2586" transform="scale(0.000976562)" />
      </pattern>
      <clipPath id="clip0_266_2586">
        <rect width="27" height="27" fill="white" />
      </clipPath>
      <clipPath id="clip1_266_2586">
        <rect width="27" height="27" rx="6" fill="white" />
      </clipPath>
      <image
        id="image0_266_2586"
        width="1024"
        height="1024"
        preserveAspectRatio="none"
        xlink:href="data:image/webp;base64,UklGRhYEAABXRUJQVlA4IAoEAACwFQCdASpgAGAAPmEukEakIqGhqrK5WIAMCWIAx5UUfJfzjHM+kCdZ+QP7X6qX0AfCr6zvMB+w37Ge/N6LfQA/YDrEfQA8tr2SP2w/bz2jqQel7M0fySt+o4T3JT+wpuui0rRtNcJITCi9tchEuALcFUocnh250znqx6Iabom1pise8jVDsAQKWQMvly6gZSd+uSE7qKldewrWqi+NqEetrBDPZf/2Z9duPAlzPEXBVlB5/tbJAAD+/Tqqxquqv5uQ1lQa7NPiZ7FMWiljn7IsUFSiRxYw1Rt4U+1Pdm+eRJ9bYynfQr1HViPYY99e+tf35/+u+zzeKviy1jpa0QsH05KuVjjTirjKPszxJlePdd0fWzPnFYfNm2gUWDVS0F8+k33Sfg4QoV4g8lZsOoUWezSIJ+1ufkUNrCEIgBmFOt0P3hBj8uYwo4bH/sB6Op9bW91er+qXUuDmoY7N3dfW4/IB6s1OU9WSNxgYRa18SLgxQNNkhJkME/JmXibYgNhRcxQrQO+4j1E1e9aBm9wyPkLWijeQ6gck76P8/GNEGOrb9AyLr3h1XmiFyAno4HRqDEjZnPMXkSealR+BNcut2Q+q07UnJGOYakj6gsPt/92CHpiMUXXE0g7L0RXe1+vMvdvpwATMldkFqm6wZSkiibT0z1j2p2hmQw3kso4v9BuJUsjnONgqf9zvf7qtcvk3po/VOy7uGL47vvjHwxXc9FqBFcZzpAPkIU4q2jlbSqGnO11Hf8T+pEibT4e4DLG1FyZZZnxQUKvE5eV8FLuOmTZuWNGjL5j1Kl2D53RyMO6BbGfxIAoFUeQ+jiFOKswTjuhAGs5zb3daTDOXeclhr2ScCZFgXaNmh0phMMpafyUPnOVze/b9RKty63Owr9wqJtBfDEAB4aaoeBnoh1gwnRGBXu2qweE9m2nZQh9MR/EfOGXN5fRcgXb+EoYGBNs/hrgvncktVn0EOlFiLTHeT0esmqjtOa0ngO6INwdwX1RdBy8j1KtTjioOv0f3ngITjY88V6n8YQovCEuP2LYnD8zZN+b1uZUfbZGgsPNQpVXAwY5OUADzunXkzFH/dT3UC02FSs9Ws/vtsfLMfe0rgq/fg1BW2Tg9xFH0GDXpY+Wnk/nav/XYFu99+HYtoWf/Eaorei2xflYYciQenE/XPGfFsYzL56KYAdc3RZYbqPMqnMtC76znzzJNUSMMf1qRFj0DjxViJjHyj+d3JwbWUekcszmd8Copd6XuybSpOOiLlAj/m29sNbgIFPuvreizDSwzzKZzjXJgnUgwrN9FOZpMzhP/PUcXH4h53fb6unAeCVMoqSx4tDiRySU1a4wrreQurhQoogmvSq9NAx+t9VXaGZ8jUIAAAA=="
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
