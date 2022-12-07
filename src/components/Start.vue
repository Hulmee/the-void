<template>
  <section class="start container">
    <div class="logo-img container">
      <img
        src="../assets/Images/Logo_Rev.svg"
        ref="logoRef"
        alt="" />
    </div>

    <h1>Touch Screen to Start</h1>
  </section>
</template>

<script setup>
  import { ref } from '@vue/reactivity'

  const logoRef = ref(null)
</script>

<style scoped>
  .start {
    height: 100vh;
    width: 100vw;
    flex-direction: column;
  }
  img {
    height: 7em;
  }

  h1 {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 800;
    margin-top: auto;
    margin-bottom: 3em;
  }
  .logo-img {
    margin-top: auto;
    /* background: var(--light); */
    padding: 1em;
    border-radius: 1em;
    box-shadow: 5px 5px 10px #2a2d2d, -5px -5px 10px #4e5353;
  }
</style>
