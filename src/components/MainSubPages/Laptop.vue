<template>
  <section class="container">
    <div
      class="btn-rnd"
      :class="{ linked: selected }"
      @click="selected = !selected">
      <font-awesome-icon
        icon="fa-solid fa-laptop"
        size="4x" />
    </div>
    <h2>Send Laptop to Zoom</h2>
  </section>
</template>

<script setup>
  import { ref } from '@vue/reactivity'

  const selected = ref(false)
</script>

<style scoped>
  section {
    height: 100%;
    width: 100%;
    flex-direction: column;
  }
  .btn-rnd {
    height: 10em;
    width: 10em;
  }
</style>
