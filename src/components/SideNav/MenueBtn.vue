<template>
  <li
    class="menu-item"
    :class="{ active: num === 2 }">
    <font-awesome-icon
      v-if="num === 1"
      icon="fa-solid fa-microphone" />
    <font-awesome-icon
      v-if="num === 2"
      icon="fa-regular fa-lightbulb" />
    <font-awesome-icon
      v-if="num === 3"
      icon="fa-solid fa-video" />
    <font-awesome-icon
      v-if="num === 4"
      icon="fa-solid fa-link" />
    <font-awesome-icon
      v-if="num === 5"
      icon="fa-solid fa-sliders" />
    <font-awesome-icon
      v-if="num === 6"
      icon="fa-solid fa-shuffle" />
    <font-awesome-icon
      v-if="num === 7"
      icon="fa-solid fa-lines-leaning" />
    <p>Label</p>
  </li>
</template>

<script setup>
  const props = defineProps({
    num: Number,
  })
</script>

<style>
  /*  */
</style>
