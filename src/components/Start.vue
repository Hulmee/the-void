<template>
  <section class="start container">
    <div class="logo-img container">
      <img
        src="../assets/Images/hulmee-Dev.svg"
        ref="logoRef"
        alt="" />
    </div>
    <div class="dir">
      <h1 class="dir-text">Touch Screen to Start</h1>
      <div class="tech">
        <font-awesome-icon icon="fa-brands fa-vuejs" />
        <font-awesome-icon icon="fa-brands fa-html5" />
        <font-awesome-icon icon="fa-brands fa-css3" />
        <font-awesome-icon icon="fa-brands fa-square-js" />
      </div>
    </div>
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

  .dir-text {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 800;
    /* margin-left: auto; */
    /* margin-bottom: 3em; */
  }
  .logo-img {
    margin-top: auto;
    /* background: var(--light); */
    padding: 1em 0.5em;
    border-radius: 1em;
    box-shadow: 5px 5px 10px #2a2d2d, -5px -5px 10px #4e5353;
  }
  .tech {
    margin: 0 0.5em 0.5em auto;
  }
  .dir {
    width: 100%;
    margin-top: auto;
    /* margin-bottom: 3em; */
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .svg-inline--fa {
    margin-left: 0.5em;
  }
</style>
