<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 27 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_certificated_members)">
      <g clip-path="url(#clip1_certificated_members)">
        <rect width="27" height="27" rx="6" fill="#4D73FB" />
        <rect
          x="0"
          y="0"
          width="27"
          height="27"
          fill="url(#pattern0_certificated_members)"
        />
      </g>
    </g>
    <defs>
      <pattern
        id="pattern0_certificated_members"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_certificated_members" transform="scale(0.000976562)" />
      </pattern>
      <clipPath id="clip0_certificated_members">
        <rect width="27" height="27" fill="white" />
      </clipPath>
      <clipPath id="clip1_certificated_members">
        <rect width="27" height="27" rx="6" fill="white" />
      </clipPath>
      <image
        id="image0_certificated_members"
        width="1024"
        height="1024"
        preserveAspectRatio="none"
        xlink:href="data:image/webp;base64,UklGRqAJAABXRUJQVlA4WAoAAAAQAAAAXwAAXwAAQUxQSDACAAABkCRt/9o2n///pcPZx1ufo2S6h+8Rr3QG066wcg5QZgwsy8zM8kj/v76ZCif52mUnIhy5bSNJctKzz+Q4FfsFKJK1+KOFZqs/GM7Ob999+ubjt59hFDlWloui8Oe3j6+f3t0+Pxtt9lvNhdz8lWQBrHWDM0/nPECFT88EvTWgVnonO0nr+HumSrxzzvsk1X6QGc9nRs1O+eF4C7C1EgzQukrSx+l0B6jEu9iTvNQCTEkvjEjvEkoocZ4cL8AWfkdjm95RSM5zpwFTcH/jMSOKKeLjfNVMfS9tvdpbMLXsc9O0FWsCm+lDjCmpmIfTMuYGnSaOt42BxRF6isrzCKzFqSRWJU5OwWL1MxNVEn5eBbrpY92HXSBIH+s+DIDTdLo4nkH9GRNdEj6rN+fazJuttJWr1adXxrM/oFPGcTBUZzhTZ+uc+tPnttXZvqv+RfeeqvP0jTpvPqrz8Zs6335RXL9CdcJInUgfp47jf3/k5Pvf/79X/1ygf67RP5fpnyv1z8X65/p76tzV36vo74W21PdaM/29nP5eUX8vqr/X1d9L6+/VcUbbFzit72v8Bb6Mvq+k74vp+3ow5rauL3nDGMDisK6veihn3E5UfeEpbNbXXlD1teumlvPlG5q+/AYMkK8dxVxBSXBhYayWixgtwJTmOi4p5TqutgBTKZfyQSOX8r5SLgXZSdZ6wZmnIQ9Q86dngu46UPgdFXNBm6NMLuj1fuWC3mRyQcNBtVwQAFZQOCBKBwAAUCEAnQEqYABgAD5hKpJFpCKhpCq2qwCADAlsAMEQhY6fp/5Oe01YP7l+F+b8pbyveeP+J/Tvxy+Bf6Z+5X7oPcA/TLpV+YD9tP2Z93j0Uf4D1AP6F/eusS9AD9o/TW9kr++f7P9wPa9uh+BTYOcCuwjwIMGNMBjE9CrP09Q+wV+unWy9Es3mar1r8veM3l7/GVt3+hjgK+yYRH12B0NA514K/tqXpzN+cPYYPbdKss2aPTjuupv9Pl66LuY6OyxC0cDG0IMoPITqJzjlTGUDRjIqOM2yxQnsZoS7wREeBbv4Q2EZ2iIQesFQbY/LhAsK0cj0JS3nQ1t21shLpPYQSsr0ihtaTVk21Wn3hNEt9201tgAA/vvgxRnBgN7Kf5UnMFsWGy+23tiotEdP5lmrvwVBKH7+v4d/GGY94HR3fPogWYxlEtrCgIzUB+DLM1ul5b/Vzx3I9HZ1pObvetHjjZw6R72gbyTJCKZD5MMNzYetPEBcUK4I/I8KmoO3YUwspSjdt3JEY/YA+ESlwxfDqUv5M4iZt1awcf1nRDi2pO63Pbrhp660uUYBzh3qvagT7VNG5f0m6AZyX7rnts/xzbAeXv+coU9nUjg9nEdPAoXxk6130VX5/f+iJ9XFJpc5cialBxWj/7FKQriDis85g9Hlsxe2gI7+FvIIO09G9Og81pN2lUpuJagKfFWJvL+6DBfVtjsktUSTdiDvK/C4Xa3zxZ0IStzz/OyGAjFPDJ0lrg+MuWhUhU1lxJdJP/eStJAA1f4xaXhak+7G3956FICBygR7A1kqLeGwFl+isZRH7aaaMZybnuxrpembv8nmybx9KL8tIgUYpnbgyAwVImA15Cfj/azWHKTPu0YCZzocEpRitqmVKFEI6wQ2EyrFqdnCfQ4KCPJTdGd2UGEZt+2zj9MShSoghrSMHVuvSeVZ21Q9VkO+CbJ6SwAAi37X1ZFo5+N0UVUVVrzmgpXt2HIYUr4Ko3nYj+4mQn5Qn0xgzjjSdZsIn476bkhoIRP2XY/9PTLsEl0d1MpU4yQno+1PmVkF5z6sIMiHK0BrQ0DpYmNvp+w6YTJVpO6FPFPkjNen5hCrpO3OGAaJbAXBGCeF+NZoZ6L4fQf8AjM2MG4slQ9UqbshKk3v+/A3bh1MIcz0oCAK2kNrDjd1HLRVQxvnhQ2CJk7h+St9aYFnO1TwUeAOBVCnGZfaSvYqL0EiRPWfOLmCHGApun+F/ZYXCUopwjo5QcTrO8x18Jy/YW8unFazL3tvA9EsqIaWdRfOkC9saGXdIwQJtpUlcBnIafzREDfNeLgnpaVE4bgdqBOtNO55QYXSRgt9C2VIY5I2ChG1Pb3r+KFgNV958qY+8e50BAFDZrjiVhOLEmxQ8reOHnPkdWSEgV7F+tzpC+H0MyA4w42pUYy/gHcbU9u6as+iZuGG4F+N8eMOfz6hLs3tTkU6e1EV2ZZ2fVPLVLrBX7QqhEG/9ovJpu4AnhGz+Vxlt6NPKgp4t/+/bYSyW63U155dkg5Ps/hm+0XhdWZ4cNVJVZ2MPa345BfVhJJLlYIiQPl9B4iRdeZISAdgnMVJIllMlUy2Z99Q4t+bDPcXsWUA5SfGI/WEli8juQo/Tmv8negDqfZNjpZ5ctJ0QN6c1Qvmlj54l6haF4Hp4pdgElIrAE1BXmMuqA71ClPqZtHcLTGw1+CuKhSaGw6nuV/3R/0jUKhXNE7hLxE3NvU+Dw9oVsKMlnhTThFjcD0cwwgwO0HsmP96lbJ21WChLyoL5eL94am1JhMfkfUe+6TP2xvstN7Hg3zX72rg8cC7R9BwE64AUDundTgHhiiGIXVF4GK2zJOt3zUv2VXzVjR2XSs6DwTqg4AsLryN4PLht+HQ/B5MTl2w8N3RehvIEhjwOTueCV2M2PcIs2HJZ36K/il6tf5fN0WVOX9O22RuCRzRSY+eH5RvSwWIOzKRguQDojRGjfBdSG85d+bD5WTrVa6cXLCaD8XY7EJ4kHZe9rOpwsz/P9eQyL1PClwPZuG78FWuH+j/0zsNDD3n1y3Zql9W9naMGOmkFnnkd5Hwff5aziSKQSgIjiAbn0LGrwdyajFAQKrr/0/zrkpMVrPqaITP6J1wCk/JB0KQyeX83b/cncoDY/fiLEQk7hFt4ZjK5ODDRN7N6+OGvmCES1GOkulB4nfSiCoxasuuwq6PKxWT64DaRkPzj8hhJygkv/pcSyyQpnxXiW2WMYcuWG2RJmr9kr6l+Nyjf34+ISf5k++YeadkBmdQZp09z7s8sYsQh2AiJ/OG5BdsDwAUiI7P4upv44sPfhIyuZlpPKIND3l++e6cc/Z9TmAZk+6CbOdFzOz+rVsheXkUsnSRz0bwMiX4+IyDXB1P8+/FblXWwBrJfqJkYEWCV8K4ApjrAlKrV4baGzMSmu2k/Do2xPY6yOoYHl7Tr5RDZBpTAQOd6SsvoGscvpbc1n9BC0o0O5i1GpLYptBtt1wA"
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
