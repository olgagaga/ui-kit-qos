<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_150_1678)">
      <g clip-path="url(#clip1_150_1678)">
        <!-- <rect width="27" height="27" rx="6" fill="#4D73FB" /> -->
        <rect
          x="-4.02539"
          y="-4"
          width="36"
          height="36"
          fill="url(#pattern0_150_1678)"
        />
      </g>
    </g>
    <defs>
      <pattern
        id="pattern0_150_1678"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_150_1678" transform="scale(0.000976562)" />
      </pattern>
      <clipPath id="clip0_150_1678">
        <rect width="27" height="27" fill="white" />
      </clipPath>
      <clipPath id="clip1_150_1678">
        <rect width="27" height="27" rx="6" fill="white" />
      </clipPath>
      <image
        id="image0_150_1678"
        width="1024"
        height="1024"
        preserveAspectRatio="none"
        xlink:href="data:image/webp;base64,UklGRg4EAABXRUJQVlA4IAIEAAAwFACdASpgAGAAPmEuk0ckIqGlJXVaqKAMCUAYzD/PycFT83egj09fMB+yPrY+lD/geoB+zPWUegB5bvsf/uZ6UaKTWw+ZV5LmQeiCjpVFJBdrB1z/d4m5ECoWP+qXg7aSFF553yCMElLZ5eIOlu1ODJS3QnzhZC15vcbLH2Fs6010CXJ6MZeYYAwJ2fsGOjTcvzs5Yz1Tvt7L9E3zpWoIROAmZCQqvDKIAAD+/McHyTc6DYqJseIcrwCr+LlJAOkvJbSHvzmVv9DNlw/TY10C7AbnbbVuLu4/n83keG59VW7OfmFo3gmYffm550Wog+zfnTjiNZLhE4CDMA5rsB38RI7bfPQfOQJy4PRb5F2dqqU+gpoDqqDXJ/CmBeqCQ2Egv9AQiQz9tea25NFCBD5WdRGvy6H06xePsCssBja2KUAjYHpp6oDZIIr4qHyazfDFeVO0BW7KYomZzYjSKefgOp/sdEjnyr9tPHLhhOSmmIqJ82v7N3J3NZ5zxnjkaRbIPo/1PEFh5doUV2I/yaPiH6qeDDLuC8VnoPd1vspxFGO3xrdxsbUJoCyspUxbe32yfY+y0IuB93z/TsL48O3UganFNG/SYDy9De/qHr89oa+7b43P/F/k2Lu0JVY+XKuQwunwsLpeMkS+Il8NlbCQkVtFx3Qew1xDG+RyNvvcXjTMdJhFAaoldmdjiKknO9BzonIdvE8LzsxmZMs1GqXRaQ+Eq1kdw4mlK1Mq4LzVR2gP3S0/a1WHuop81pTd9hk7CjiAMwYkM9ewojA05OWSM7M3un0D/+cS7RB+2hVCF22Py1fytTQ/+xpfsQMH9OzSfrBQnllwhjGkaboFnfvr0gwSTjwskSn6WebceNGPzV8f71SZIcSwkPXd995T7IuBfHPypE2P9G0kS980YFC6y+XJPRzsKs2mTD/IPsvFJO9pU5Z1na3CQx7ldqwU7Mru0DR6JB+G3NyC2fteuKW/GAJRCK3VytuXqUTf8ZTxI/jSSy6D94bFn57X9U8PZilWaY6WD4Nt/f0r2MEtFWKP0vaVaXSKD2OjdVKxdxX6MBUlgckom9n1a4idKPpCgvl8Jkgnh+CQWALrPv1n7VEk5zvF3Kubw/ZoS7PC256mnY21LFQSrH99Wp9tTZK2gaH/zHzxUU0irp8zJUI+a6GS2bu4Q82a2nl3/meVncfNl4b9V3QsuByRH8Pi6sjwuifX9ejOjjLIPOFiliE8T5eOiOJREHRRnMH2QplWSLP+txpBU3pp2uMRsyz9dPF+VhAG+S7i4bqBwpJ85Y4ICHj6xp2tuKX3SFbI3YOV2ygHnSuqBNnzRUYhtaqZduxklP/KYzNvabKp9Vm2MEtVDEAAAAA="
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
