<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const projectName = router.currentRoute.value.params.projectName
const projectAnimation = ref(false)
const pureImage = '/src/shared/assets/images/pure-cosmetic.png'

const projectSite = () => {
  window.open('https://pure-cosmetic.ca')
}

if (projectName) {
  setTimeout(() => {
    projectAnimation.value = true
  }, 100)
}
</script>

<template>
  <div class="project-container" :class="{ 'project-animation': projectAnimation }">
    <div class="content">
      <button class="back-button" @click="router.push({ name: 'Home', hash: '#school-projects' })">
        Back
      </button>
      <h2 @click="projectSite" class="title">{{ projectName }}</h2>
      <img
        v-if="projectName === 'pure-cosmetic'"
        class="project-image"
        :src="pureImage"
        alt="pure cosmetic"
        @click="projectSite"
      />
      <p v-if="projectName === 'pure-cosmetic'">
        Pure Cosmetic: A web application developed as part of the Advanced Transactional Web
        Applications course. This project showcases a cosmetic store built using technologies such
        as Vue.js, Express.js, TypeScript, JWT token authentication, and MongoDB for the database.
        Explore the world of cosmetics with this feature-rich e-commerce platform.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-container {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: 0;
  transform: scale(0.5);
  transition: all 1s ease-in-out;
  height: 99dvh;
  overflow: hidden;
}
.project-animation {
  opacity: 1;
  transform: translate(0px, 0px) scale(1);
  transition: all 1.5s ease-in-out;
}
.content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}
.project-image {
  width: 80%;
  object-fit: cover;
  margin: 2rem 0;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px #fff;
  cursor: pointer;
}
.back-button {
  align-self: flex-start;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
}

.title {
  cursor: pointer;
  &:hover {
    color: #bf40bf;
  }
}
</style>
