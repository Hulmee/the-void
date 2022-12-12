<template>
  <div
    id="tech-page"
    class="container">
    <section
      @click.self="$emit('return')"
      id="menueSP"
      class="">
      <!-- <transition-group name="slide-fade"> -->
      <Lighting v-if="btnProp[0].Feedback" />
      <CafeTV v-if="btnProp[1].Feedback" />
      <Microphones v-if="btnProp[2].Feedback" />
      <!-- </transition-group> -->
    </section>
    <nav>
      <ul>
        <MenueBtn
          v-for="btn of btnProp"
          :key="btn.id"
          :btnProp="btn"
          @click="menuSwitch(btn)" />
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
  // import Vue thgings
  import { ref } from '@vue/reactivity'

  // import Menu Buttons
  import MenueBtn from './Menu/MenueBtn.vue'
  //imporet Menu Sub Pages
  import Lighting from './Menu/Lighting.vue'
  import CafeTV from './Menu/CafeTV.vue'
  import Microphones from './Menu/Microphones.vue'

 

  const emit = defineEmits(['return'])

  // Menu button logic and data
  const menuSwitch = e => {
      btnProp.value.forEach(fe => {
        // console.log(e)
        fe.Feedback = false
      })
      btnProp.value[e.id - 1].Feedback = true
    },
    btnProp = ref([
      {
        id: 1,
        Enable: true,
        Visable: true,
        Feedback: false,
        icon: 2,
        Label: 'Lighting',
      },
      {
        id: 2,
        Enable: true,
        Visable: true,
        Feedback: false,
        icon: 6,
        Label: 'Cafe TV',
      },
      {
        id: 3,
        Enable: true,
        Visable: true,
        Feedback: true,
        icon: 1,
        Label: 'Microphones',
      },
      {
        id: 4,
        Enable: true,
        Visable: true,
        Feedback: false,
        icon: 3,
        Label: 'Cameras',
      },
      {
        id: 5,
        Enable: true,
        Visable: true,
        Feedback: false,
        icon: 4,
        Label: 'Linking',
      },
      {
        id: 6,
        Enable: true,
        Visable: true,
        Feedback: false,
        icon: 5,
        Label: 'Tech Settings',
      },
      {
        id: 7,
        Enable: false,
        Visable: true,
        Feedback: false,
        icon: 7,
        Label: 'Microphones',
      },
    ])

  // menu subPages logic
</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all 0.8s ease-out;
  }

  /* .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  } */

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
  #tech-page {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    background: var(--dark-trans);
  }
  #menueSP {
    display: flex;
    height: 100%;
    width: 100%;
  }
  nav {
    width: 300px;
    height: 100%;
    border-left: solid var(--gold);
    background: #141515;
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
  .btn-rnd {
    background: #141515;
  }
  #return-arrow {
    transform: scaleX(-1);
  }
</style>
