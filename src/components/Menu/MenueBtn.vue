<template>
  <li
    class="menu-item"
    :class="{ active: btnProp.Feedback, disable: !btnProp.Enable }">
    <font-awesome-icon
      v-if="btnProp.icon === 1"
      icon="fa-solid fa-microphone" />
    <font-awesome-icon
      v-if="btnProp.icon === 2"
      icon="fa-regular fa-lightbulb" />
    <font-awesome-icon
      v-if="btnProp.icon === 3"
      icon="fa-solid fa-video" />
    <font-awesome-icon
      v-if="btnProp.icon === 4"
      icon="fa-solid fa-link" />
    <font-awesome-icon
      v-if="btnProp.icon === 5"
      icon="fa-solid fa-sliders" />
    <font-awesome-icon
      v-if="btnProp.icon === 6"
      icon="fa-solid fa-shuffle" />
    <font-awesome-icon
      v-if="btnProp.icon === 7"
      icon="fa-solid fa-lines-leaning" />
    <p>{{ btnProp.Label }}</p>
  </li>
</template>

<script setup>
  const props = defineProps({
    btnProp: Object,
  })
  const emit = defineEmits(['selected'])
</script>

<style>
  /*  */
</style>
