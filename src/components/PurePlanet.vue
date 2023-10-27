<script setup lang="ts">
import { ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import PurePlanet from '@/shared/assets/lotties/pureplanet.json'
import { useIntersectionObserver } from '@vueuse/core'
const lottieAnimation = ref(null) as any
const targetPlanet1 = ref(null)
const active = ref(false)

useIntersectionObserver(targetPlanet1, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    active.value = true
  } else {
    active.value = false
  }
})
</script>

<template>
  <div class="container" ref="targetPlanet1" :class="{ 'animation': active }">
    <Vue3Lottie
      ref="lottieAnimation"
      :animation-data="PurePlanet"
      :height="200"
      :speed="0.2"
      :loop="true"
      :autoplay="false"
    />
  </div>
</template>

<style scoped>
.container {
  opacity: 0;
}

.animation {
  animation: arrive 2s ease-in-out forwards;
}

@keyframes arrive {
  0% {
    transform: translate(50%, -50%) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
