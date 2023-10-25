<script setup lang="ts">
import { ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import PurePlanet from '@/shared/assets/lotties/pureplanet.json'
const lottieAnimation = ref(null) as any
</script>

<template>
  <Vue3Lottie
    ref="lottieAnimation"
    :animation-data="PurePlanet"
    :height="200"
    :speed="0.2"
    :loop="true"
    :autoplay="false"
  />
</template>

<style scoped></style>
