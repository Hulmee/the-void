<template>
  <section class="start container">
    <div class="logo-img container">
      <img
        src="../assets/Images/logo.svg"
        alt="" />
    </div>

    <h1>Touch Screen to Start</h1>
  </section>
</template>

<script setup>
  //
</script>

<style scoped>
  .start {
    height: 100vh;
    width: 100vw;
    flex-direction: column;
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
    background: var(--light);
    padding: 0.5em;
    border-radius: 1em;
  }
</style>
