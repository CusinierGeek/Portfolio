<script setup lang="ts">
import { ref, watch } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
// import PurePlanet from '@/shared/assets/lotties/pureplanet.json'
import { useIntersectionObserver } from '@vueuse/core'
const lottieAnimation = ref(null) as any
const targetPlanet1 = ref(null)
const active = ref(false)
const isPlaying = ref(true)
const playAnimation = ref(false)

const props = defineProps({
  lottieJson: {
    type: Object,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  speed: {
    type: Number,
    required: true,
    default: 1
  },
  loop: {
    type: Boolean,
    default: true
  },
  translate: {
    type: String,
    default: '50%, -50%'
  }
})

const play = () => {
  lottieAnimation.value.play()
  isPlaying.value = true
}

const pause = () => {
  lottieAnimation.value.pause()
  isPlaying.value = false
}

useIntersectionObserver(targetPlanet1, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    active.value = true
    playAnimation.value = true
  } else {
    active.value = false
    playAnimation.value = false
  }
})
watch(
  () => playAnimation.value,
  (newVal) => {
    if (newVal) {
      play()
    } else {
      stop()
    }
  }
)
</script>

<template>
  <div
    class="container"
    ref="targetPlanet1"
    :class="{ animation: active }"
    :style="`--translate: ${props.translate}`"
  >
    <Vue3Lottie
      ref="lottieAnimation"
      :animation-data="lottieJson"
      :height="height"
      :speed="speed"
      :loop="loop"
      :autoplay="false"
      @on-animation-loaded="pause"
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
    transform: translate(var(--translate)) scale(0);
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
