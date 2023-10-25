<script setup lang="ts">
import { ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import Planet2 from '@/shared/assets/lotties/planet2.json'
const lottieAnimation = ref(null) as any
</script>

<template>
  <Vue3Lottie
    ref="lottieAnimation"
    :animation-data="Planet2"
    :height="200"
    :speed="0.2"
    :loop="true"
    :autoplay="false"
  />
</template>

<style scoped></style>
