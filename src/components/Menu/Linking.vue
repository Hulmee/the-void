<template>
  <div class="linking">
    <h2>Link to room 123</h2>
    <div class="link-info">
      <div
        class="btn-rnd btn-rnd-sm"
        :class="{
          linked: linkedFB,
          blink: linkVal === 4 || linkVal === 5,
        }"></div>
      <h5 class="">Room is available to link</h5>
    </div>
    <div class="btn-con">
      <div class="btn-lab-con">
        <button
          class="btn-rnd"
          :class="{ linked: linkedFB, blink: linkVal === 4 || linkVal === 5 }"
          :disabled="linkVal == 4 || linkVal == 5"
          @click="linkOp">
          <font-awesome-icon
            icon="fa-solid fa-link"
            size="2x" />
        </button>
        <!-- <h4>Link Now</h4> -->
        <h4>{{ linkTxt }}</h4>
      </div>
      <div class="btn-lab-con">
        <button class="btn-rnd">
          <font-awesome-icon
            icon="fa-solid fa-x"
            size="2x" />
        </button>
        <h4>Cancel Link</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, reactive, ref } from 'vue'

  const linkedFB = ref(false),
    linkVal = ref(0),
    linkTxt = computed(() => {
      // 0 1 = Link now
      if (linkVal.value === 1 || linkVal.value === 0) {
        linkedFB.value = false
        return 'Link Now'
      }
      // 2 , 6 = Cannot Link
      if (linkVal.value === 2 || linkVal.value === 6) {
        linkedFB.value = false
        return 'Cannot Link'
      }
      // 3 = Unlink Now
      if (linkVal.value === 3) {
        linkedFB.value = true
        return 'Unlink Now'
      }
      // 4 = Linking...
      if (linkVal.value === 4) {
        linkedFB.value = true
        return 'Linking...'
      }
      // 5 = Unlinking...
      else if (linkVal.value === 5) {
        linkedFB.value = true
        return 'Unlinking...'
      }
      // 7 = Link Anyway
      if (linkVal.value === 7) {
        linkedFB.value = false
        return 'Link Anyway'
      } else {
        linkedFB.value = false
        return ' '
      }
    }),
    linkOp = () => {
      if (linkVal.value <= 1) {
        linkVal.value = 4
        setTimeout(() => {
          linkVal.value = 3
        }, 3000)
      }
      if (linkVal.value === 3) {
        linkVal.value = 5
        setTimeout(() => {
          linkVal.value = 0
        }, 3000)
      }
    }
</script>

<style scoped>
  .linking {
    height: 100%;
    margin-left: auto;
    width: 40%;
    background: var(--dark);
    padding: 5em 0 0 2em;
  }

  /* .btn-rnd-xsm {
    height: 1.5em;
    width: 1.5em;
    margin: 0.5em 1em;
    box-shadow: none;
  } */
  .link-info {
    display: flex;
    align-items: center;
  }
  .btn-con {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .btn-lab-con {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .linked.blink {
    animation: blinkingBackground 2s infinite;
  }
  @keyframes blinkingBackground {
    0% {
      background-color: var(--info);
    }
    25% {
      background-color: var(--dark);
    }
    50% {
      background-color: var(--info);
    }
    75% {
      background-color: var(--dark);
    }
    100% {
      background-color: var(--info);
    }
  }
</style>
