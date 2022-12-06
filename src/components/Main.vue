<template>
  <SideNav
    @shutdown="$emit('shutdown')"
    ref="source" />
  <main class="container">
    <section class="container">
      <Transition>
        <Laptop v-show="source.btn == 2" />
      </Transition>
    </section>
    <footer class="">
      <div class="container col">
        <div class="btn-rnd btn-rnd-sm">
          <font-awesome-icon icon="fa-solid fa-gear" />
        </div>
        <div
          class="btn-rnd btn-rnd-sm"
          @click="isLinked = !isLinked"
          :class="{ linked: isLinked }">
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
  import Laptop from './MainSubPages/Laptop.vue'
  import { watch } from '@vue/runtime-core'

  const volMute = ref(false)
  const micMute = ref(false)
  const isLinked = ref(false)
  const source = ref(0)

  const emit = defineEmits(['shutdown'])
  const shutdown = () => {
    confirmSD.value = false
    emit('shutdown')
  }
</script>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
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
    padding: 0 2em;
  }

  .slider {
    appearance: none;
    width: 100%;
    height: 2em;
    border-radius: 1em;
    background: var(--dark);
    outline: none;
    border: 3px solid var(--light2);
    box-shadow: 5px 5px 10px #2a2d2d, -5px -5px 10px #4e5353;
  }

  .slidecontainer {
    width: 30%;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.5em;
    height: 5em;
    border-radius: 2em;
    background: var(--gold);

    box-shadow: 2.5px 2.5px 5px #2a2d2d, -2.5px -2.5px 5px #4e5353;

    cursor: pointer;
  }

  .mute {
    margin-left: auto;
    padding: 0 0.5em;
  }
</style>
