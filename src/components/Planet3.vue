<script setup lang="ts">
import Planet3 from '@/shared/assets/lotties/planet3.json'
import { ref } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import { useIntersectionObserver } from '@vueuse/core'
const lottieAnimation = ref(null) as any
const targetPlanet2 = ref(null)
const active = ref(false)

useIntersectionObserver(targetPlanet2, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    active.value = true
  } else {
    active.value = false
  }
})
</script>

<template>
  <div class="container" ref="targetPlanet2" :class="{ 'animation': active }">
    <Vue3Lottie
      ref="lottieAnimation"
      :animation-data="Planet3"
      :height="230"
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
    transform: translate(-50%, -50%) scale(0);
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

