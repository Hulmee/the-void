<template>
  <div class="mics">
    <UserVolumeSRL
      v-for="aud in audioBlocks"
      :key="aud.id"
      :itemProp="aud" />
  </div>
</template>

<script setup>
  import { ref } from '@vue/reactivity'
  import UserVolumeSRL from './UserVolumeSRL.vue'

  const audioBlocks = ref([
    {
      id: 1,
      Enable: true,
      Visable: true,
      Muted: false,
      value: 75,
      Label: 'Handheld 1',
    },
    {
      id: 2,
      Enable: true,
      Visable: true,
      Muted: false,
      value: 0,
      Label: 'Handheld 2',
    },
    {
      id: 3,
      Enable: true,
      Visable: true,
      Muted: false,
      value: 0,
      Label: 'Lapel 1',
    },
    {
      id: 4,
      Enable: true,
      Visable: true,
      Muted: false,
      value: 0,
      Label: 'Lapel 2',
    },
    {
      id: 5,
      Enable: true,
      Visable: true,
      Muted: false,
      value: 0,
      Label: 'Lectern Mic',
    },
    {
      id: 6,
      Enable: true,
      Visable: false,
      Muted: false,
      value: 0,
      Label: 'Label',
    },
    {
      id: 7,
      Enable: true,
      Visable: false,
      Muted: false,
      value: 0,
      Label: 'Label',
    },
    {
      id: 8,
      Enable: true,
      Visable: false,
      Muted: false,
      value: 0,
      Label: 'Label',
    },
    {
      id: 9,
      Enable: true,
      Visable: false,
      Muted: false,
      value: 0,
      Label: 'Label',
    },
    {
      id: 10,
      Enable: true,
      Visable: false,
      Muted: false,
      value: 0,
      Label: 'Label',
    },
  ])

</script>

<style scoped>
  .mics {
    height: 100%;
    margin-left: auto;
    width: 75%;
    background: var(--dark);
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .hList {
    overflow: auto;
    flex-wrap: wrap;
    flex-direction: column;
  }
</style>
