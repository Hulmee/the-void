<template>
  <SideNav
    @shutdown="$emit('shutdown')"
    ref="source" />
  <main class="container">
    <section
      id="subP"
      class="container">
      <!-- <Transition> -->
      <Laptop v-show="source.btn == 2" />
      <!-- </Transition>
      <Transition> -->
      <PC v-show="source.btn == 1" />
      <!-- </Transition> -->
      <IPTV v-show="source.btn == 3" />
    </section>
    <footer class="">
      <div class="adv-btn">
        <div
          class="btn-rnd btn-rnd-sm"
          @click="showSettings = true">
          <font-awesome-icon icon="fa-solid fa-gear" />
        </div>
        <div
          v-if="linkable"
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
  <Settings
    v-if="showSettings"
    @return="showSettings = false" />
</template>

<script setup>
  import { ref } from '@vue/reactivity'
  import SideNav from './SideNav/SideNav.vue'
  import Laptop from './MainSubPages/Laptop.vue'
  import PC from './MainSubPages/PC.vue'
  import IPTV from './MainSubPages/IPTV.vue'
  import Settings from './Settings.vue'
  import { watch } from '@vue/runtime-core'

  const volMute = ref(false)
  const micMute = ref(false)
  const isLinked = ref(false)
  const source = ref(0)
  const linkable = ref(false),
    showSettings = ref(false)

  const emit = defineEmits(['shutdown'])
  const shutdown = () => {
    confirmSD.value = false
    emit('shutdown')
  }
</script>

<style scoped>
  .v-enter-active {
    transition: opacity 0.5s ease;
  }
  .v-leave-active {
    transition: opacity 0.5s ease;
    transition-delay: 0.5s;
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

  #subP {
    height: 80%;
    width: 100%;
  }

  footer {
    width: 100%;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .adv-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
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
