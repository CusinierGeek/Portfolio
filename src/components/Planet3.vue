<script setup lang="ts">
import { ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import Planet3 from '@/shared/assets/lotties/planet3.json'
const lottieAnimation = ref(null) as any

const play = () => {
  lottieAnimation.value.playSegments([0, 140], true)
}
</script>

<template>
  <Vue3Lottie
    ref="lottieAnimation"
    :animation-data="Planet3"
    :height="200"
    :speed="0.2"
    :loop="true"
    :autoplay="false"
    @on-animation-loaded="play"

  />
</template>

<style scoped></style>
