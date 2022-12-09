<template>
  <Main
    v-if="Pages === 301"
    @shutdown="confirmSD = true" />
  <Start
    v-if="Pages === 300"
    @click="Pages = 301" />
  <Shutdown
    v-if="confirmSD"
    @cancel="confirmSD = false"
    @now="shutdwnAct" />
</template>

<script setup>
  import { ref } from 'vue'
  import Main from './components/Main.vue'
  import Start from './components/Start.vue'

  // import modals
  import Shutdown from './components/Modals/Shutdown.vue'
  const Pages = ref(300)
  const confirmSD = ref(false)
  const shutdwnAct = () => {
    Pages.value = 300
    confirmSD.value = false
  }
</script>

<style scoped></style>
