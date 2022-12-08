<template>
  <section id="IPVT-con">
    <IPTVbtn
      v-for="i of 30"
      :key="i"
      :num="i" />
  </section>
</template>

<script setup>
  import IPTVbtn from './SubpageSRL/IPTVbtn.vue'
</script>

<style scoped>
  #IPVT-con {
    height: 90%;
    width: 100%;
    display: flex;
    overflow: auto;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
