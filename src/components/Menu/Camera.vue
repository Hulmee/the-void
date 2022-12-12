<template>
  <div class="cameras-sub">
    <div class="cameras container">
      <div
        class="cam-sel container"
        v-for="cam of cameras"
        :key="cam"
        :class="{
          disable: !cam.Enable,
          hidden: !cam.Visable,
        }">
        <div
          class="btn-rnd btn-rnd-sm"
          @click="camSwitch(cam)"
          :class="{ linked: cam.selected }">
          <font-awesome-icon icon="fa-solid fa-video" />
        </div>
        <h3>{{ cam.Label }}</h3>
      </div>
    </div>
    <div class="cam-con">
      <div class="track container">
        <div class="btn-rnd"><small>Tracking</small></div>
      </div>
      <div class="up btn-rnd btn-rnd-sm">
        <font-awesome-icon icon="fa-solid fa-angle-up" />
      </div>
      <div class="dwn btn-rnd btn-rnd-sm">
        <font-awesome-icon icon="fa-solid fa-angle-down" />
      </div>
      <div class="left btn-rnd btn-rnd-sm">
        <font-awesome-icon icon="fa-solid fa-angle-left" />
      </div>
      <div class="right btn-rnd btn-rnd-sm">
        <font-awesome-icon icon="fa-solid fa-angle-right" />
      </div>
      <div class="zoomP container">
        <div class="btn-rnd btn-rnd-sm">
          <font-awesome-icon icon="fa-solid fa-plus" />
        </div>
      </div>
      <div class="zoomM container">
        <div class="btn-rnd btn-rnd-sm">
          <font-awesome-icon icon="fa-solid fa-minus" />
        </div>
      </div>
      <ul class="presets">
        <small>Presets</small>
        <li
          class="preset"
          @click="preSwitch(i)"
          :class="{ linked: i.selected }"
          v-for="i of presets"
          :key="i">
          {{ i.Label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { ref } from '@vue/reactivity'

  const cameras = ref([
      {
        id: 1,
        Enable: true,
        Visable: true,
        selected: false,
        Label: 'Camera 1',
      },
      {
        id: 2,
        Enable: true,
        Visable: true,
        selected: false,
        Label: 'Camera 2',
      },
      {
        id: 3,
        Enable: true,
        Visable: false,
        selected: false,
        Label: 'Camera 3',
      },
      {
        id: 4,
        Enable: true,
        Visable: false,
        selected: false,
        Label: 'Camera 4',
      },
      {
        id: 5,
        Enable: true,
        Visable: false,
        selected: false,
        Label: 'Camera 5',
      },
      {
        id: 6,
        Enable: true,
        Visable: false,
        selected: false,
        Label: 'Camera 6',
      },
    ]),
    camSwitch = e => {
      cameras.value.forEach(fe => {
        fe.selected = false
      })
      e.selected = true
    },
    presets = ref([
      {
        id: 1,
        Enable: true,
        Visable: true,
        selected: false,
        Label: 'preset 1',
      },
      {
        id: 2,
        Enable: true,
        Visable: true,
        selected: false,
        Label: 'preset 2',
      },
      {
        id: 3,
        Enable: true,
        Visable: true,
        selected: false,
        Label: 'preset 3',
      },
      {
        id: 4,
        Enable: true,
        Visable: true,
        selected: false,
        Label: 'preset 4',
      },
    ]),
    preSwitch = e => {
      presets.value.forEach(fe => {
        fe.selected = false
      })
      e.selected = true
    }
</script>

<style scoped>
  .linked {
    background: var(--info);
  }
  .cameras-sub {
    height: 100%;
    margin-left: auto;
    width: 50%;
    background: var(--dark);
  }
  .cameras {
    height: 25%;
    overflow-y: auto;
    flex-direction: column;
  }
  .cam-con {
    height: 75%;
    display: grid;
    grid-template-columns: 1.5fr repeat(5, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
  .track {
    grid-column: 1/3;
    grid-row: 1/3;
  }
  .up {
    grid-column: 4/5;
    grid-row: 2/3;
  }
  .dwn {
    grid-column: 4/5;
    grid-row: 4/5;
  }
  .left {
    grid-column: 3/4;
    grid-row: 3/4;
  }
  .right {
    grid-column: 5/6;
    grid-row: 3/4;
  }
  .zoomM {
    grid-column: 2/4;
    grid-row: 4/5;
  }
  .zoomP {
    grid-column: 5/7;
    grid-row: 4/5;
  }
  .presets {
    grid-column: 4/7;
    grid-row: 6/9;
  }
  .preset {
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--light2);
  }
</style>
