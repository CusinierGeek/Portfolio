<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import { useIntersectionObserver } from '@vueuse/core'
// const target = ref(null)
// const active = ref(false)
const props = defineProps({
  text: {
    type: String,
    default: 'Hello World'
  }
})

// useIntersectionObserver(
//   target,
//   ([{ isIntersecting }]) => {
//     if (isIntersecting) {
//       active.value = true
//     } else {
//       active.value = false
//     }
//   },
//   {
//     rootMargin: '100px 100px 0px 0px'
//   }
// )

const text = ref('')

// animate name and display  final name letter by letter

const typeText = (name: string) => {
  let i = 0
  const animation = setInterval(() => {
    text.value = name.slice(0, i)
    i++
    if (i > name.length) {
      clearInterval(animation)
    }
  }, 100)
}

onMounted(() => {
  typeText(props.text)
})
</script>

<template>
  <h2>{{ text }}</h2>
</template>

<style scoped></style>
