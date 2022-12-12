<template>
  <div class="cafe container">
    <div class="tv-con">
      <div class="btn-rnd btn-rnd-sm btn-up">
        <font-awesome-icon icon="fa-solid fa-angle-up" />
      </div>
      <div class="btn-rnd btn-rnd-sm btn-left">
        <font-awesome-icon icon="fa-solid fa-angle-left" />
      </div>
      <div class="btn-rnd btn-rnd-sm btn-cen">
        <font-awesome-icon icon="fa-regular fa-circle" />
      </div>
      <div class="btn-rnd btn-rnd-sm btn-right">
        <font-awesome-icon icon="fa-solid fa-angle-right" />
      </div>
      <div class="btn-rnd btn-rnd-sm btn-dwn">
        <font-awesome-icon icon="fa-solid fa-angle-down" />
      </div>
      <div class="chn">
        <h2 class="ch-lab">Channel</h2>
        <div class="btn-rnd btn-rnd-sm">
          <font-awesome-icon icon="fa-solid fa-angle-up" />
        </div>
        <div class="btn-rnd btn-rnd-sm">
          <font-awesome-icon icon="fa-solid fa-angle-down" />
        </div>
      </div>
      <div class="pre-r1">
        <div class="btn-rec btn-rec-sm"><h3 class="pre-lab">Power</h3></div>
        <div class="btn-rec btn-rec-sm"><h3 class="pre-lab">Info</h3></div>
      </div>
      <div class="pre-r2">
        <div class="btn-rec btn-rec-sm"><h3 class="pre-lab">Subtitles</h3></div>
        <div class="btn-rec btn-rec-sm"><h3 class="pre-lab">Guide</h3></div>
      </div>
      <div class="pre-r3">
        <div class="btn-rec btn-rec-sm"><h3 class="pre-lab">Menu</h3></div>
        <div class="btn-rec btn-rec-sm"><h3 class="pre-lab">Back</h3></div>
      </div>

      <div class="btn-rnd btn-rnd-sm kp1"><h2 class="kp-lab">1</h2></div>
      <div class="btn-rnd btn-rnd-sm kp2"><h2 class="kp-lab">2</h2></div>
      <div class="btn-rnd btn-rnd-sm kp3"><h2 class="kp-lab">3</h2></div>
      <div class="btn-rnd btn-rnd-sm kp4"><h2 class="kp-lab">4</h2></div>
      <div class="btn-rnd btn-rnd-sm kp5"><h2 class="kp-lab">5</h2></div>
      <div class="btn-rnd btn-rnd-sm kp6"><h2 class="kp-lab">6</h2></div>
      <div class="btn-rnd btn-rnd-sm kp7"><h2 class="kp-lab">7</h2></div>
      <div class="btn-rnd btn-rnd-sm kp8"><h2 class="kp-lab">8</h2></div>
      <div class="btn-rnd btn-rnd-sm kp9"><h2 class="kp-lab">9</h2></div>
      <div class="btn-rnd btn-rnd-sm kp0"><h2 class="kp-lab">0</h2></div>
    </div>
  </div>
</template>

<script setup>
  //
</script>

<style scoped>
  .cafe {
    height: 100%;
    margin-left: auto;
    width: 75%;
    max-width: 1000px;
    background: var(--dark);
  }
  .tv-con {
    height: 90%;
    width: 90%;
    max-height: 900px;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(10, 1fr);
    container-type: size;
    container-name: controls;
  }
  @container controls (min-width: 700px) {
    .btn-rnd-sm {
      height: 5em;
      width: 5em;
    }
    .btn-rec {
      /* height: 7em; */
      width: 9em;
    }
    .svg-inline--fa {
      font-size: 2em;
    }
  }
  @container controls (max-width: 700px) {
    .pre-lab {
      font-size: smaller;
    }
    .kp-lab {
      font-size: 1em;
    }
  }
  .btn-up {
    grid-column: 3/4;
    grid-row: 2/3;
  }
  .btn-dwn {
    grid-column: 3/4;
    grid-row: 4/5;
    /* border: solid;
    border-top: none;
    border-bottom-left-radius: 2em;
    border-bottom-right-radius: 2em; */
  }
  .btn-cen {
    grid-column: 3/4;
    grid-row: 3/4;
  }
  .btn-right {
    grid-column: 4/5;
    grid-row: 3/4;
    /* border: solid;
    border-left: none;
    border-top-right-radius: 2em;
    border-bottom-right-radius: 2em; */
  }
  .btn-left {
    grid-column: 2/3;
    grid-row: 3/4;
    /* border: solid;
    border-right: none;
    border-top-left-radius: 2em;
    border-bottom-left-radius: 2em; */
  }

  .chn {
    grid-column: 6/9;
    grid-row: 2/5;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .pres {
    grid-column: 2/5;
    grid-row: 5/11;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .pre-r1 {
    grid-column: 2/5;
    grid-row: 6/7;
    display: flex;
    align-items: center;
  }
  .pre-r2 {
    grid-column: 2/5;
    grid-row: 7/8;
    display: flex;
    align-items: center;
  }
  .pre-r3 {
    grid-column: 2/5;
    grid-row: 8/9;
    display: flex;
    align-items: center;
  }
  .kp1 {
    grid-column: 6/7;
    grid-row: 6/7;
  }
  .kp2 {
    grid-column: 7/8;
    grid-row: 6/7;
  }
  .kp3 {
    grid-column: 8/9;
    grid-row: 6/7;
  }
  .kp4 {
    grid-column: 6/7;
    grid-row: 7/8;
  }
  .kp5 {
    grid-column: 7/8;
    grid-row: 7/8;
  }
  .kp6 {
    grid-column: 8/9;
    grid-row: 7/8;
  }
  .kp7 {
    grid-column: 6/7;
    grid-row: 8/9;
  }
  .kp8 {
    grid-column: 7/8;
    grid-row: 8/9;
  }
  .kp9 {
    grid-column: 8/9;
    grid-row: 8/9;
  }
  .kp0 {
    grid-column: 7/8;
    grid-row: 9/10;
  }
</style>
