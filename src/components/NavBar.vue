<script setup lang="ts"></script>

<template>
  <div class="nav">
    <ul class="nav-links">
      <li><router-link to="/#home" class="glitch" data-text="Home">Home</router-link></li>
      <li><router-link to="/#skills" class="glitch" data-text="About">skills</router-link></li>
      <li>
        <router-link to="/#school-projects" class="glitch" data-text="Hover Over Me">Projects</router-link>
      </li>
      <li>
        <router-link to="/#contact" class="glitch" data-text="Hover Over Me">Contact</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="sass">

@keyframes


.nav-links
  display: flex
  justify-content: space-around
  list-style: none
  width: 100%
  padding: 0
  margin: 0
  font-weight: bold
  color: #fff
  text-shadow: 0 0 10px #fff
  li
    a
      text-decoration: none
      color: #fff
      &:hover
        color: #BF40BF
        text-shadow: 0 0 10px #fff


.nav
  height: 10%
  width: 80%
  position: fixed
  top: 0
  left: 10%
  z-index: 100
  display: flex
  justify-content: center
  align-items: center
  background-color: #0008

@media (max-width: 900px)
  .nav
   width: 100%
   left: 0
</style>
