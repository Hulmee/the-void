<template>
  <SideNav @shutdown="$emit('shutdown')" />
  <main class="container">
    <section class="container">
      <h1>Zoom is Selected</h1>
    </section>
    <footer class="">
      <div class="container col">
        <div class="btn-rnd btn-rnd-sm">
          <font-awesome-icon icon="fa-solid fa-gear" />
        </div>
        <div class="btn-rnd btn-rnd-sm">
          <font-awesome-icon icon="fa-solid fa-link" />
        </div>
      </div>
      <div
        class="mute btn-rnd"
        :class="{ muted: micMute }"
        @click="micMute = !micMute">
        <font-awesome-icon
          v-if="!micMute"
          icon="fa-solid fa-microphone-lines"
          size="2x" />
        <font-awesome-icon
          v-else
          icon="fa-solid fa-microphone-lines-slash"
          size="2x" />
      </div>
      <div
        class="btn-rnd"
        :class="{ muted: volMute }"
        @click="volMute = !volMute">
        <font-awesome-icon
          v-if="volMute"
          icon="fa-solid fa-volume-xmark"
          size="2x" />
        <font-awesome-icon
          v-else
          icon="fa-solid fa-volume-high"
          size="2x" />
      </div>
      <div class="slidecontainer">
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          class="slider"
          id="myRange" />
      </div>
    </footer>
  </main>
</template>

<script setup>
  import { ref } from '@vue/reactivity'
  import SideNav from './SideNav/SideNav.vue'

  const volMute = ref(false)
  const micMute = ref(false)
  const emit = defineEmits(['shutdown'])
  const shutdown = () => {
    confirmSD.value = false
    emit('shutdown')
  }
</script>
<style scoped>
  main {
    height: 100%;
    width: 100%;
    flex-direction: column;
  }

  section {
    height: 100%;
    width: 100%;
    /* margin-left: 400px; */
  }

  footer {
    width: 100%;
    height: 10em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .col {
    flex-direction: column;
  }
  .slidecontainer {
    width: 30%;
    /* margin-left: auto; */
    padding: 0 2em;
    /* Width of the outside container */
  }

  /* The slider itself */
  .slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 1.5em;
    background: var(--light);
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .slidecontainer {
    width: 30%;
    /* Width of the outside container */
  }

  .slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 2em;
    border-radius: 1em;
    /* color: white; */
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    /* Override default look */
    appearance: none;
    width: 3em;
    height: 3em;
    border-radius: 2em;
    background: var(--gold);
    cursor: pointer;
  }

  .mute {
    margin-left: auto;
    padding: 0 0.5em;
  }
</style>
