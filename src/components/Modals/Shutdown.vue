<template>
  <teleport to="body">
    <section
      class="modal"
      @click="$emit('cancel')">
      <div class="card">
        <h3 class="title">
          System will Shutdown in <span v-if="timeleft < 10">0</span
          ><span>{{ timeleft }}</span
          >s
        </h3>

        <div class="content container">
          <p>Shutdown Now</p>
          <div
            class="btn-rnd btn-rnd-sm"
            @click="$emit('now')">
            <font-awesome-icon icon="fa-solid fa-power-off" />
          </div>
        </div>

        <div class="canel">
          <!-- <div> -->
          <p>Cancel</p>
          <div
            class="btn-rnd btn-rnd-sm"
            @click="$emit('cancel')">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </div>
          <!-- </div> -->
        </div>
      </div>
    </section>
  </teleport>
</template>

<script setup>
  import { ref } from '@vue/reactivity'
  import { onMounted } from '@vue/runtime-core'

  const timeleft = ref(10)

  const emit = defineEmits(['cancel', 'now'])
  onMounted(() => {
    const downloadTimer = setInterval(function () {
      if (timeleft.value <= 0) {
        clearInterval(downloadTimer)
        emit('now')
      }
      timeleft.value -= 1
    }, 1000)
  })
</script>

<style scoped>
  span {
    width: 2em;
  }
  .card {
    max-height: 200px;
    height: 50%;
    aspect-ratio: 16 / 9;
    background-color: var(--dark);
    text-align: center;
    border: 10px solid var(--dark);
    border-radius: 20px;
    /* box-shadow: inset 5px 5px 10px #bbb, inset -5px -5px 10px #fff; */
    box-shadow: inset 5px 5px 10px var(--light2),
      inset -5px -5px 10px var(--light2);
    transition: 0.5s;
    display: grid;
    grid-template-areas:
      'title title'
      'cont can';
  }

  .title {
    color: var(--light);
    grid-area: title;

    padding: 10px;
    margin: 5px 20px;
    border-radius: 8px;
  }

  .content {
    grid-area: cont;
    display: flex;
    flex-direction: column;
    align-items: conter;
    justify-content: center;
    color: var(--light);
    margin-bottom: 1em;
  }

  .canel {
    grid-area: can;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--light);
    margin-bottom: 1em;
  }
</style>
