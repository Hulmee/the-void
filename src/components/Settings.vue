<template>
  <div
    id="tech-page"
    class="container">
    <section
      @click.self="$emit('return')"
      id="menueSP"></section>
    <nav>
      <ul>
        <MenueBtn
          v-for="i of 7"
          :key="i"
          :num="i" />
      </ul>
      <div
        class="return"
        @click="$emit('return')">
        <div class="btn-rnd">
          <font-awesome-icon
            icon="fa-solid fa-share"
            id="return-arrow"
            size="3x" />
        </div>
        <h1>Return</h1>
      </div>
    </nav>
  </div>
</template>

<script setup>
  import SideNav from './SideNav/SideNav.vue'
  import MenueBtn from './SideNav/MenueBtn.vue'
  const emit = defineEmits(['return'])
</script>

<style scoped>
  /* h1 {
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: auto;
    margin-bottom: 0.3em;
  } */
  #tech-page {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    background: var(--dark-trans);
    /* opacity: 0.9; */
  }
  #return-arrow {
    transform: scaleX(-1);
  }
  #menueSP {
    height: 100%;
    width: 100%;
  }
  nav {
    width: 300px;
    height: 100%;
    background: var(--dark);
    display: flex;
    flex-direction: column;
  }
  .menu-item {
    width: 90%;
    padding: 2em;
    display: flex;
    align-items: center;
    border-radius: 1em;
    margin: 0 0 0.5em 0.5em;
    transition: 300ms;
    cursor: pointer;
    /* font-size: 0.9em; */
    font-size: 0.9em;
  }

  .menu-item:first-child {
    margin-top: 0.5em;
  }
  .active {
    color: var(--gold);
    box-shadow: 10px 10px 60px #181a1a, -10px -10px 60px #606666;
  }
  .return {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    margin-bottom: 0.25em;
  }
</style>
