<script setup lang="ts">
import Starfield from '@/components/Starfield.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <Starfield class="starfield">
    <!-- <NavBar /> -->
    <RouterView />
  </Starfield>
</template>

<style scoped lang="sass"></style>
