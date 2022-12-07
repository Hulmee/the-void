<template>
  <nav :class="{ expand: navExpand }">
    <ul class="nav">
      <li
        id="logo"
        class="nav-item expand">
        <span class="nav-text logo-text"> Room Name </span>
        <font-awesome-icon
          icon="fa-solid fa-angles-right"
          size="2x"
          @click="navExpand = !navExpand" />
      </li>
      <li
        class="nav-item"
        :class="{ active: btn === 1 }"
        @click="btnClick(1)">
        <h3 class="nav-text">Laptop</h3>
        <font-awesome-icon
          icon="fa-solid fa-laptop"
          size="2x" />
      </li>
      <li
        class="nav-item"
        :class="{ active: btn === 2 }"
        @click="btnClick(2)">
        <h3 class="nav-text">Zoom</h3>
        <font-awesome-icon
          icon="fa-solid fa-video"
          size="2x" />
      </li>
      <li
        class="nav-item"
        :class="{ active: btn === 3 }"
        @click="btnClick(3)">
        <h3 class="nav-text">TV</h3>
        <font-awesome-icon
          icon="fa-solid fa-tv"
          size="2x" />
      </li>
      <li
        class="nav-item"
        :class="{ active: btn === 4 }"
        @click="btnClick(4)">
        <h3 class="nav-text">Signage</h3>
        <font-awesome-icon
          icon="fa-solid fa-sign-hanging"
          size="2x" />
      </li>
      <!-- <div class="time"> -->
      <li
        id="td"
        class="nav-item">
        <p class="clock">12:00 PM</p>
      </li>

      <li
        id="pwr"
        @click="$emit('shutdown')"
        class="nav-item">
        <font-awesome-icon
          icon="fa-solid fa-power-off"
          size="2x" />
      </li>
      <!-- </div> -->
    </ul>
  </nav>
</template>

<script setup>
  import { ref } from '@vue/reactivity'
  import { computed } from '@vue/runtime-core'

  const navExpand = ref(true)
  const btn = ref(0)
  const btnClick = n => {
    btn.value = n
  }
  const expand = computed(() => {
    if (navExpand.value) {
      return 'inline'
    }
    return 'none'
  })
  const emit = defineEmits(['shutdown'])
  defineExpose({
    btn,
  })
</script>

<style scoped>
  .tech {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5em 1em;
    transition: all 200ms ease-in-out;
    display: v-bind(expand);
  }
  .expand > svg {
    transform: rotate(0deg);
    transition: var(--tras-time);
  }

  .expand > .nav > .expand > svg {
    transform: rotate(180deg);
  }

  .nav {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 1em;
  }

  nav {
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: var(--tras-time);
  }

  .expand {
    width: 300px;
  }

  li {
    list-style: none;
    gap: 1em;
  }

  .logo-text {
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  #pwr {
    color: var(--fail);
    margin: 0 0 1em 1em;
    justify-content: center;
    background: var(--light);
    border: none;
  }

  .nav-item {
    width: 90%;
    padding: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
    margin: 0 0 0.5em 1em;
    transition: 300ms;
    cursor: pointer;
  }
  .nav-item:nth-child(5) {
    display: none;
  }
  .nav-item.active {
    color: var(--gold);
    /* box-shadow: inset 5px 5px 10px #2a2d2d, inset -5px -5px 10px #4e5353; */
    box-shadow: 10px 10px 60px #181a1a, -10px -10px 60px #606666;
  }

  .nav-text {
    /* display: none; */
    display: v-bind(expand);

    transition: display 200ms ease-in;
  }

  /* .expand > .nav > .nav-item > .nav-text {
    display: block;
  } */

  .expand > .nav > .nav-item {
    justify-content: flex-end;
  }

  #td {
    margin-top: auto;
    text-align: center;
    justify-content: center;
    border: none;
  }
  #logo {
    border: none;
  }

  .clock {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1.5em;
    text-align: center;
  }
</style>
