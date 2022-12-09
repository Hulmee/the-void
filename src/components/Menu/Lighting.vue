<template>
  <div class="lights">
    <section class="zone">
      <h2 class="label">Zone 1</h2>
      <div
        class="btn-con"
        v-for="btn of zone1"
        :key="btn.id"
        :class="[
          { disable: !btn.Enable, hiden: !btn.Visable },
          `btn-${btn.id}`,
        ]"
        @click="z1Switch(btn)">
        <div
          id=""
          class="btn-rnd btn-rnd-sm"
          :class="{ active: btn.Feedback }">
          <font-awesome-icon icon="fa-regular fa-lightbulb" />
        </div>
        <p class="p-lab">{{ btn.Label }}</p>
      </div>
    </section>
    <section class="zone">
      <h2 class="label">Zone 2</h2>
      <div
        class="btn-con"
        v-for="btn of zone2"
        :key="btn.id"
        :class="[
          { disable: !btn.Enable, hiden: !btn.Visable },
          `btn-${btn.id}`,
        ]"
        @click="z2Switch(btn)">
        <div
          id=""
          class="btn-rnd btn-rnd-sm"
          :class="{ active: btn.Feedback }">
          <font-awesome-icon icon="fa-regular fa-lightbulb" />
        </div>
        <p class="p-lab">{{ btn.Label }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { ref } from '@vue/reactivity'

  const zone1 = ref([
      {
        id: 1,
        Enable: true,
        Visable: true,
        Feedback: false,
        Label: '100%',
      },
      {
        id: 2,
        Enable: true,
        Visable: true,
        Feedback: false,
        Label: 'Office Hours',
      },
      {
        id: 3,
        Enable: true,
        Visable: true,
        Feedback: false,
        Label: 'Cocktail',
      },
      {
        id: 4,
        Enable: false,
        Visable: false,
        Feedback: false,
        Label: 'preset',
      },
      {
        id: 5,
        Enable: true,
        Visable: false,
        Feedback: false,
        Label: 'preset',
      },
      {
        id: 6,
        Enable: true,
        Visable: true,
        Feedback: false,
        Label: 'Presentaion',
      },
      {
        id: 7,
        Enable: true,
        Visable: true,
        Feedback: false,
        Label: 'Training',
      },
      {
        id: 8,
        Enable: true,
        Visable: true,
        Feedback: false,
        Label: 'Off',
      },
      {
        id: 9,
        Enable: true,
        Visable: false,
        Feedback: false,
        Label: 'Office Hours',
      },
      {
        id: 10,
        Enable: true,
        Visable: false,
        Feedback: false,
        Label: 'Office Hours',
      },
    ]),
    z1Switch = e => {
      zone1.value.forEach(fe => {
        fe.Feedback = false
      })
      zone1.value[e.id - 1].Feedback = true
    },
    zone2 = ref([
      {
        id: 1,
        Enable: true,
        Visable: true,
        Feedback: true,
        Label: 'Hesta Purple',
      },
      {
        id: 2,
        Enable: true,
        Visable: true,
        Feedback: false,
        Label: 'Warm White',
      },
      {
        id: 3,
        Enable: true,
        Visable: true,
        Feedback: false,
        Label: 'Cool White',
      },
      {
        id: 4,
        Enable: false,
        Visable: false,
        Feedback: false,
        Label: 'preset',
      },
      {
        id: 5,
        Enable: true,
        Visable: false,
        Feedback: false,
        Label: 'preset',
      },
      {
        id: 6,
        Enable: true,
        Visable: true,
        Feedback: false,
        Label: 'Red',
      },
      {
        id: 7,
        Enable: true,
        Visable: true,
        Feedback: false,
        Label: 'Blue',
      },
      {
        id: 8,
        Enable: true,
        Visable: true,
        Feedback: false,
        Label: 'Green',
      },
      {
        id: 9,
        Enable: true,
        Visable: true,
        Feedback: false,
        Label: 'Off',
      },
      {
        id: 10,
        Enable: true,
        Visable: false,
        Feedback: false,
        Label: 'Preset',
      },
    ]),
    z2Switch = e => {
      zone2.value.forEach(fe => {
        fe.Feedback = false
      })
      zone2.value[e.id - 1].Feedback = true
    }
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
  .btn-con.hiden {
    display: none;
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
