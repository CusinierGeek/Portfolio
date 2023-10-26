<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const projectName = router.currentRoute.value.params.projectName
const projectAnimation = ref(false)
import pureImage from '@/shared/assets/images/pure-cosmetic.png'
import hockeyCardsImage from '@/shared/assets/images/hockeycards.png'
import taskManagerImage from '@/shared/assets/images/taskmanager.png'

const projectSite = () => {
  if (projectName === 'Pure-cosmetic') {
    window.open('https://pure-cosmetic.ca')
  } else if (projectName === 'Hockey Cards') {
    window.open('https://cusiniergeek.github.io/HockeyCards/')
  }
}

const handleBack = () => {
  projectAnimation.value = false
  setTimeout(() => {
    router.push({ name: 'Home', hash: '#projects' })
  }, 1000)
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
      <button class="back-button" @click="handleBack">Back</button>
      <h2 @click="projectSite" class="title">{{ projectName }}</h2>
      <img
        class="project-image"
        :src="
          projectName === 'Pure-cosmetic'
            ? pureImage
            : projectName === 'Hockey Cards'
            ? hockeyCardsImage
            : taskManagerImage
        "
        alt="Pure cosmetic"
        @click="projectSite"
      />

      <p class="info" v-if="projectName === 'Pure-cosmetic'">
        Pure Cosmetic: A web application developed as part of the Advanced Transactional Web
        Applications course. This project showcases a cosmetic store built using technologies such
        as Vue.js, Express.js, TypeScript, JWT token authentication, and MongoDB for the database.
        Explore the world of cosmetics with this feature-rich e-commerce platform.
      </p>
      <p class="info" v-if="projectName === 'Hockey Cards'">
        Hockey Card CRUD: This project was developed as part of the Advanced Web Development course.
        It is a dynamic application that allows users to manage their hockey card collection,
        featuring the ability to add, create, delete, and sort cards. The project was originally
        built using vanilla JavaScript and later refactored into TypeScript as part of the
        Intermediate Software Quality course, enhancing its code quality and maintainability
      </p>
      <p class="info" v-if="projectName === 'Task Manager'">
        Task Manager: This TypeScript project was created during the Software Quality course to
        implement a robust CRUD system for managing tasks. Utilizing TypeScript classes, it provides
        a structured and organized approach to handling tasks, making it easier to create, read,
        update, and delete tasks while maintaining high code quality and adherence to software
        quality standards.
      </p>
      <a v-if="projectName === 'Pure-cosmetic'" href="https://pure-cosmetic.ca"> Visit the site </a>
      <a v-if="projectName === 'Hockey Cards'" href="https://cusiniergeek.github.io/HockeyCards/">
        Visit the site
      </a>
      <a v-if="projectName === 'Task Manager'" href="https://cusiniergeek.github.io/TaskManager/">
        Visit the site
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
a {
  color: #fff;
  margin-top: 1rem;
}
.project-container {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: 0;
  transform: scale(0.5);
  transition: all 1s ease-in-out;
  height: 99dvh;
  margin-top: 1.5rem;

  overflow: hidden;
}
.info {
  margin-top: 2rem;
  text-align: left;
}
.project-animation {
  opacity: 1;
  transform: translate(0px, 0px) scale(1);
  transition: all 1.5s ease-in-out;
}
.content {
  position: relative;
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
@media (max-width: 768px) {
  .content {
    width: 100%;
  }
  .project-image {
    width: 80%;
  }
}
</style>
