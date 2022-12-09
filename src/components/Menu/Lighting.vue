<template>
  <div class="lights">
    <section class="zone">
      <h2 class="label">Zone 1</h2>
      <div
        class="btn-con"
        v-for="i of 10"
        :key="i"
        :class="`btn-${i}`">
        <div
          id=""
          class="btn-rnd btn-rnd-sm"
          :class="{ active: true }">
          <font-awesome-icon icon="fa-regular fa-lightbulb" />
        </div>
        <p class="p-lab">Preset {{ i }}</p>
      </div>
    </section>
    <section class="zone">
      <h2 class="label">Zone 2</h2>
      <div
        class="btn-con"
        v-for="i of 10"
        :key="i"
        :class="`btn-${i}`">
        <div
          id=""
          class="btn-rnd btn-rnd-sm">
          <font-awesome-icon icon="fa-regular fa-lightbulb" />
        </div>
        <p class="p-lab">Preset {{ i }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
  //
</script>

<style scoped>
  .lights {
    height: 100%;
    margin-left: auto;
    width: 50%;
    background: var(--dark);
  }
  .zone {
    height: 50%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 2fr;
    grid-template-rows: repeat(6, 1fr);
  }
  .label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    grid-column: 1/3;
    grid-row: 1/2;
    padding-left: 0.5em;
  }
  .p-lab {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 0.5em;
  }

  .btn-10 {
    display: flex;
    grid-column: 3/5;
    grid-row: 6/7;
  }
  .btn-9 {
    display: flex;
    grid-column: 3/5;
    grid-row: 5/6;
  }
  .btn-8 {
    display: flex;
    grid-column: 3/5;
    grid-row: 4/5;
  }
  .btn-7 {
    display: flex;
    grid-column: 3/5;
    grid-row: 3/4;
  }
  .btn-6 {
    display: flex;
    grid-column: 3/5;
    grid-row: 2/3;
  }
  .btn-5 {
    display: flex;
    grid-column: 1/3;
    grid-row: 6/7;
  }
  .btn-4 {
    display: flex;
    grid-column: 1/3;
    grid-row: 5/6;
  }
  .btn-3 {
    display: flex;
    grid-column: 1/3;
    grid-row: 4/5;
  }
  .btn-2 {
    display: flex;
    grid-column: 1/3;
    grid-row: 3/4;
  }
  .btn-1 {
    display: flex;
    grid-column: 1/3;
    grid-row: 2/3;
  }
</style>
