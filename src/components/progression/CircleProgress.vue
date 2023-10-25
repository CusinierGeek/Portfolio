<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
  percentage: {
    type: Number,
    default: 0
  },
  circleSize: {
    type: Number,
    default: 200
  },
  fontSize: {
    type: Number,
    default: 5
  },
  skill: {
    type: String,
    default: 'nodeJs'
  }
})

const imgSrc = ref('')
const title = ref('')
import nodeJs from '@/shared/assets/images/svg/node-js.svg'
import vueJs from '@/shared/assets/images/svg/vue-js.svg'
import c from '@/shared/assets/images/svg/c.svg'
import css from '@/shared/assets/images/svg/css.svg'
import javascript from '@/shared/assets/images/svg/javascript.svg'
import html from '@/shared/assets/images/svg/html.svg'
import git from '@/shared/assets/images/svg/git.svg'
import sass from '@/shared/assets/images/svg/sass.svg'
import mysql from '@/shared/assets/images/svg/mysql.svg'
import mongodb from '@/shared/assets/images/svg/mongo-db.svg'

onMounted(() => {
  switch (props.skill) {
    case 'nodeJs':
      imgSrc.value = nodeJs
      title.value = 'Node . Js'
      break
    case 'vueJs':
      imgSrc.value = vueJs
      title.value = 'Vue . Js'
      break
    case 'c':
      imgSrc.value = c
      title.value = 'C#'
      break
    case 'css':
      imgSrc.value = css
      title.value = 'Css'
      break
    case 'javascript':
      imgSrc.value = javascript
      title.value = 'JS / TS'
      break
    case 'html':
      imgSrc.value = html
      title.value = 'Html'
      break
    case 'git':
      imgSrc.value = git
      title.value = 'Git'
      break
    case 'sass':
      imgSrc.value = sass
      title.value = 'Sass'
      break
    case 'mysql':
      imgSrc.value = mysql
      title.value = 'Mysql'
      break
    case 'mongodb':
      imgSrc.value = mongodb
      title.value = 'MongoDb'
      break
  }
})

const target = ref(null)
const percentage = ref<number>(1)
const templatePercentage = ref(0)
const circleSize = props.circleSize
const circleRadius = circleSize / 2 - 10
const circleCenter = circleSize / 2
const progressColor = 'url(#cl1)'
const dashArray = ref(2 * Math.PI * circleRadius)
const dashOffset = ref(0)

const active = ref(false)

const activateCircle = () => {
  active.value = true
  percentage.value = 0
  setTimeout(() => {
    percentage.value = props.percentage
    animatePercentage(0, percentage.value)
  }, 200)
}

useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    activateCircle()
  } else {
    active.value = false
    percentage.value = 0
    animatePercentage(percentage.value, 0)
  }
})
const calculateInterval = (start: number, end: number) => {
  const animationDuration = 2000 // Durée totale de l'animation en millisecondes (par exemple, 2000ms)
  const step = 1
  const numSteps = Math.abs(end - start) / step // Nombre total d'étapes
  return animationDuration / numSteps // Intervalle de temps approprié
}
const animatePercentage = (start: number, end: number) => {
  const step = 1
  const interval = calculateInterval(start, end)
  let current = start
  const animation = setInterval(() => {
    if (current < end) {
      templatePercentage.value = current
      current += step
    } else {
      templatePercentage.value = end
      clearInterval(animation)
    }
  }, interval)
}

watch(percentage, () => {
  updateCircle()
})

const updateCircle = () => {
  const perc = percentage.value * 0.01 * (2 * Math.PI * circleRadius)
  dashArray.value = +`${2 * Math.PI * circleRadius}`
  dashOffset.value = +`${2 * Math.PI * circleRadius - perc}`
}
</script>
<template>
  <div class="skill" ref="target">
    <div class="skill-info">
      <img :src="imgSrc" alt="" />
      <h3>{{ title }}</h3>
    </div>

    <div
      :class="{ active }"
      class="progress-circle-container"
      :style="{ width: circleSize + 'px' }"
    >
      <div class="circle-content">
        <h4 class="percentage"
          :class="{
            'offset-text': templatePercentage >= 10,
            'offset-text-100': templatePercentage >= 100
          }"
        >
          {{ templatePercentage }}%
        </h4>
        <svg class="progress-circle" :width="circleSize" :height="circleSize">
          <defs>
            <linearGradient id="cl1" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
              <stop stop-color="#ea68a2" />

              <stop offset="100%" stop-color="#448aca" />
            </linearGradient>
          </defs>

          <g :transform="`rotate(-90, ${circleCenter}, ${circleCenter})`">
            <circle
              class="bg"
              :r="circleRadius"
              :cx="circleCenter"
              :cy="circleCenter"
              fill="none"
            ></circle>

            <circle
              class="progress"
              :r="circleRadius"
              :cx="circleCenter"
              :cy="circleCenter"
              fill="none"
              :stroke="progressColor"
              :stroke-dasharray="dashArray"
              :stroke-dashoffset="dashOffset"
            ></circle>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.progress-circle-container
  position: relative
  margin: 5px
  opacity: 0
  transform: scale(0)
  transition: all 1s ease-in-out

  &.active
    opacity: 1
    transform: scale(1)


.circle-content
  display: flex
  justify-content: center
  align-items: center
  color: #fff


svg
  display: block
  margin-top: 0



.percentage
  position: absolute
  left: 35%
  color: #fff
  font-weight: normal
  font-family: Helvetica, sans-serif

span
   color: #fff
   font-weight: normal
   font-family: Helvetica, sans-serif

.progress-circle .progress
  stroke-width: 16
  transition: stroke-dashoffset 2s linear

.progress-circle .bg
  stroke: #fff
  stroke-width: 20

.offset-text
  transform: translateX(-6%)
.offset-text-100
  transform: translateX(-20%)
.skill
  display: flex
  align-items: center
  justify-content: center
  margin: 20px
.skill img
  width: 100px
  height: 100px

.skill-info
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  h3
    color: #fff
    font-size: 1.5rem
    font-weight: normal
    font-family: Helvetica, sans-serif
    margin: 0
    padding: 0
    text-align: center
    text-transform: uppercase
    letter-spacing: 0.1rem
    margin-top: 1rem
    text-shadow: 0 0 10px #fff
</style>
