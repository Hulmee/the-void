<template>
  <!-- <section class="container"> -->
  <div class="btn-rec">
    <img
      src="@/assets/Images/TV-Logos/7.svg"
      v-if="num === 1"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/7bravo.svg"
      v-if="num === 2"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/7flix.svg"
      v-if="num === 3"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/7mate.svg"
      v-if="num === 4"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/7two.svg"
      v-if="num === 5"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/9gemhd.svg"
      v-if="num === 6"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/9go!.svg"
      v-if="num === 7"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/9hd.svg"
      v-if="num === 8"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/9life.svg"
      v-if="num === 9"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/9rush.svg"
      v-if="num === 10"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/10-bold.svg"
      v-if="num === 11"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/10-hd.svg"
      v-if="num === 12"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/10-peach.svg"
      v-if="num === 13"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/10-shake.svg"
      v-if="num === 14"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/10.svg"
      v-if="num === 15"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/abc-me.svg"
      v-if="num === 16"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/abc-news.svg"
      v-if="num === 17"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/abckids-tvplus.svg"
      v-if="num === 18"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/abc-tv.svg"
      v-if="num === 19"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/abc-hd.svg"
      v-if="num === 20"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/c31-melbourne.svg"
      v-if="num === 21"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/nitv.svg"
      v-if="num === 22"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/sbs-food.svg"
      v-if="num === 23"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/sbs-hd.svg"
      v-if="num === 24"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/sbs-one.svg"
      v-if="num === 25"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/sbs-viceland-hd.svg"
      v-if="num === 26"
      draggable="false" />
    <img
      src="@/assets/Images/TV-Logos/sbs-worldwatch.svg"
      v-if="num === 27"
      draggable="false" />
    <!-- <img
      src="@/assets/Images/TV-Logos/"
      v-if="num === 28" />
    <img
      src="@/assets/Images/TV-Logos/"
      v-if="num === 29" />
    <img
      src="@/assets/Images/TV-Logos/"
      v-if="num === 30" /> -->
  </div>
  <!-- </section> -->
</template>

<script setup>
  const props = defineProps({
    num: Number,
  })
</script>

<style scoped>
  .TVstyle {
    fill: var(--light);
  }
  .btn {
    height: 90%;
    width: 90%;
    flex-direction: column;
  }
  .btn-rec {
    display: inline-block;
    width: 10em;
    /* aspect-ratio: 1; */
    border: solid var(--light2);
    border-radius: 2em;
    margin: 0.5em;
    padding: 1em;
    height: 10em;
    background: linear-gradient(145deg, #404444, #363a3a);
    box-shadow: 5px 5px 10px #2a2d2d, -5px -5px 10px #4e5353;
    cursor: pointer;
  }
  .btn-rec.linked {
    background: var(--info);
    box-shadow: inset 5px 5px 10px #4378b0, inset -5px -5px 10px #5ba2ee;
  }
  img {
    height: 100%;
  }
  .btn-rec:active {
    box-shadow: inset 5px 5px 10px #2a2d2d, inset -5px -5px 10px #4e5353;
  }
  /* .btn-rec > img {
    width: 100%;
  } */
</style>
