<script setup lang="ts">
import CircleProgress from './CircleProgress.vue'
</script>

<template>
  <div class="progress">
    <CircleProgress :percentage="100" :circleSize="120" :fontSize="3" />
    <CircleProgress :percentage="80" :circleSize="120" :fontSize="3" />
    <CircleProgress :percentage="90" :circleSize="120" :fontSize="3" />
    <CircleProgress :percentage="70" :circleSize="120" :fontSize="3" />
    
  </div>
</template>

<style scoped>

.progress {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  margin-top: 10%;
}
</style>
