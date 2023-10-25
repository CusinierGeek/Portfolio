<script setup lang="ts">
import TextTyping from '@/components/TextTyping.vue'
const text = "Hi, my name is Fred and i'm a full stack developer"
</script>

<template>
  <TextTyping :text="text" class="title" />
</template>

<style scoped>
.title {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
