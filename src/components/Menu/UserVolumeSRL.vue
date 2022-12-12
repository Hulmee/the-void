<template>
  <section class="audio">
    <div class="grid">
      <div class="label container">
        <h4 class="">{{ itemProp.Label }}</h4>
      </div>
      <div class="vol container">
        <input
          type="range"
          class="slider"
          max="100"
          @change="change"
          v-model="itemProp.value" />
      </div>
      <div class="vol-btn container">
        <div
          class="btn-rnd btn-rnd-sm"
          @click="up">
          <font-awesome-icon icon="fa-solid fa-angle-up" />
        </div>
        <div
          class="btn-rnd btn-rnd-sm"
          @click="mute"
          :class="{ muted: itemProp.mute }">
          <font-awesome-icon icon="fa-solid fa-microphone" />
        </div>
        <div
          class="btn-rnd btn-rnd-sm"
          @click="down">
          <font-awesome-icon icon="fa-solid fa-angle-down" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref } from '@vue/reactivity'

  const props = defineProps({
      // num: Number,
      itemProp: Object,
    }),
    down = () => {
      if (props.itemProp.mute) {
        props.itemProp.mute = false
      }
      props.itemProp.value--
    },
    up = () => {
      if (props.itemProp.mute) {
        props.itemProp.mute = false
      }
      props.itemProp.value++
    },
    mute = () => {
      props.itemProp.mute = !props.itemProp.mute
    }

  // console.log(itemProp)
</script>

<style scoped>
  .audio {
    height: 100%;
    max-height: 900px;
    width: 11em;
    /* margin: 0 0.5em; */
    display: flex;
    align-items: center;
    justify-content: center;

    container-type: size;
    container-name: audio;
  }
  @container audio (min-height: 900px) {
    .svg-inline--fa {
      font-size: 2em;
    }
    .btn-rnd-sm {
      height: 5em;
      width: 5em;
    }
  }
  .grid {
    text-align: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    column-gap: 0.5 em;
    row-gap: 0.1em;
    box-shadow: 10px 13px 10px 0px rgba(0, 0, 0, 0.25);
    margin: 1em 0;
  }

  .label {
    grid-column: 1/4;
    text-align: center;
    justify-content: center;
  }
  .vol {
    grid-column: 1/2;
    grid-row: 2/5;
  }
  .vol-btn {
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    grid-column: 2/4;
    grid-row: 2/5;
  }
  input[type='range'] {
    appearance: slider-vertical;
    -webkit-appearance: slider-vertical;
    height: 75%;
    width: 1em;

    cursor: pointer;
  }
  /* .slidecontainer {
    width: 30%;
    padding: 0 2em;
  }
*/
  .slider {
    /* border: 3px solid var(--light2); */
    box-shadow: 5px 5px 10px #2a2d2d, -5px -5px 10px #4e5353;
  }

  /* .slider::-webkit-slider-thumb {
    left: 10em;
  } */
</style>
