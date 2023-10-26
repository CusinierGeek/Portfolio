<script setup lang="ts">
import { useRouter } from 'vue-router'
import CircleProgress from '@/components/progression/CircleProgress.vue'
import PurePlanet from '@/components/PurePlanet.vue'
import Planet2 from '@/components/Planet2.vue'
import Planet3 from '@/components/Planet3.vue'
import Welcome from '@/components/Welcome.vue'
import { useIntersectionObserver } from '@vueuse/core'
const projectAnimation = ref(false)
import { ref, onMounted } from 'vue'
const router = useRouter()
const target = ref(null)
const target2 = ref(null)

const selectProject = (projectName: string) => {
  projectAnimation.value = true
  setTimeout(() => {
    router.push({ name: 'Project', params: { projectName } })
  }, 1000)
}

const active = ref(false)

useIntersectionObserver([target, target2], ([{ isIntersecting }]) => {
  if (isIntersecting) {
    active.value = true
  } else {
    active.value = false
  }
})
</script>

<template>
  <div ref="el" class="content-container" :class="{ 'project-animation': projectAnimation }">
    <div id="content" class="content">
      <div id="home" class="welcome">
        <img
          :class="{ active: active }"
          ref="target"
          src="@/shared/assets/images/astronaut.png"
          alt="logo"
          class="astronaut"
        />
        <Welcome />
      </div>

      <div id="skills" class="progress-container">
        <h1>These are my skills</h1>
        <div class="progress">
          <h3 class="category">
            Front-end <img src="@/shared/assets/images/svg/frontend.svg" alt="" />
          </h3>
          <div id="front-end">
            <CircleProgress :percentage="80" :circleSize="120" :fontSize="3" skill="vueJs" />
            <CircleProgress :percentage="90" :circleSize="120" :fontSize="3" skill="javascript" />
            <CircleProgress :percentage="95" :circleSize="120" :fontSize="3" skill="html" />
            <CircleProgress :percentage="95" :circleSize="120" :fontSize="3" skill="css" />
            <CircleProgress :percentage="70" :circleSize="120" :fontSize="3" skill="sass" />
          </div>
          <h3 class="category">
            Back-end<img src="@/shared/assets/images/svg/backend.svg" alt="" />
          </h3>
          <div id="back-end">
            <CircleProgress :percentage="75" :circleSize="120" :fontSize="3" skill="c" />
            <CircleProgress :percentage="80" :circleSize="120" :fontSize="3" skill="mysql" />
            <CircleProgress :percentage="90" :circleSize="120" :fontSize="3" skill="mongodb" />
            <CircleProgress :percentage="80" :circleSize="120" :fontSize="3" skill="nodeJs" />
            <CircleProgress :percentage="90" :circleSize="120" :fontSize="3" skill="git" />
          </div>
        </div>
        <div class="school-container">
          <div class="school-title">
            <h2>Explore My School Projects</h2>
            <img
              id="projects"
              :class="{ active: active }"
              ref="target2"
              src="@/shared/assets/images/astro-laptop.png"
              alt="logo"
              class="astronaut laptop"
            />
          </div>
          <div id="school-projects">
            <div class="pure-project" @click="selectProject('Pure-cosmetic')">
              <PurePlanet />
              <p>Pure-cosmetic</p>
            </div>
            <div class="planet3" @click="selectProject('Hockey Cards')">
              <Planet3 />
              <p>Hockey cards</p>
            </div>

            <div class="planet2" @click="selectProject('Task Manager')">
              <Planet2  />
              <p>Task Manager</p>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" class="contact">
        <h3 class="category">Contact</h3>
        <div class="contact-container">
          <div class="contact-content">
            <h3>Email</h3>
            <a class="email" href="mailto:frederik.noel@outlook.fr "> frederik.noel@outlook.fr </a>
          </div>
          <div class="links">
            <div class="contact-content">
              <a href="https://linkedin.com/in/frédérik-noël-1a3761250" target="_blank">
                <img src="@/shared/assets/images/svg/linkedin.svg" alt="" />
              </a>
            </div>
            <div class="contact-content">
              <a href="https://github.com/CusinierGeek" target="_blank">
                <img src="@/shared/assets/images/svg/github.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-container {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  overflow-y: scroll;
  max-height: 99dvh;
  scroll-behavior: smooth;
  scrollbar-width: none;
}
.content-container::-webkit-scrollbar {
  display: none;
}

.active {
  opacity: 1 !important;
  transition: all 1.5s ease-in-out;
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
.welcome {
  padding: 2rem;
  width: 100%;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#school-projects {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50%;
}

.astronaut {
  width: 40%;
  opacity: 0;
  transform: scaleX(-1);
  z-index: 100;
}
.progress-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.progress {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#front-end,
#school-projects,
#back-end {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.category {
  margin: 100px 0;
  text-decoration: underline;
  display: flex;
  align-items: center;
  justify-content: center;
}
.category img {
  width: 50px;
  margin: 0 1rem;
}

.contact-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.contact {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.contact-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem;
}

.contact a {
  text-decoration: none;
  color: white;
  font-size: 2rem;
}
.contact p {
  margin: 0;
}
.email:hover {
  color: #ff0000;
}
.contact img {
  width: 10rem;
  margin: 0 1rem;
  transform: scale(1);
  transition: all 0.5s ease-in-out;
}
.contact img:hover {
  transform: scale(1.2);
  transition: all 0.5s ease-in-out;
}
.links {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}
.laptop {
  width: 30%;
  opacity: 0;
  transform: scaleX(1);
}
.school-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.school-title {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pure-project {
  z-index: 100;
  cursor: pointer;
  justify-self: flex-start;
  align-self: flex-start;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
}
.planet2 {
  cursor: pointer;
  justify-self: flex-start;
  align-self: flex-start;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
}
.planet3 {
  cursor: pointer;
  justify-self: flex-start;
  align-self: flex-end;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
}

.project-animation {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
  transition: all 1s ease-in-out;
}

/* grand écran  */
@media (min-width: 1024px) {
  .astronaut {
    width: 30%;
  }

  #front-end,
  #back-end {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
    padding: 2rem;
    background-color: #0008;
    border-radius: 10px;
    box-shadow: 0 0 10px #fff;
    max-width: 1200px;
  }
  .content {
    width: 70%;
  }
}

/*mobile*/
@media (max-width: 768px) {
  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }
  .school-container {
    height: 100%;
  }

  #school-projects {
    flex-direction: column;
    width: 100%;
  }
}
</style>
