<template>
  <div class="tech-kp container">
    <div class="keypad">
      <h1>Enter Passcode</h1>
      <input
        type="password"
        v-model="passcodeString" />
      <h2
        class="error"
        v-show="error">
        Incorect Pin
      </h2>
      <div class="btn-con">
        <div class="btn-item">
          <div
            @click="keyPress('1')"
            class="btn-rnd">
            <h2>1</h2>
          </div>
        </div>
        <div class="btn-item">
          <div
            @click="keyPress('2')"
            class="btn-rnd">
            <h2>2</h2>
          </div>
        </div>
        <div class="btn-item">
          <div
            @click="keyPress('3')"
            class="btn-rnd">
            <h2>3</h2>
          </div>
        </div>
        <div class="btn-item">
          <div
            @click="keyPress('4')"
            class="btn-rnd">
            <h2>4</h2>
          </div>
        </div>
        <div class="btn-item">
          <div
            @click="keyPress('5')"
            class="btn-rnd">
            <h2>5</h2>
          </div>
        </div>
        <div class="btn-item">
          <div
            @click="keyPress('6')"
            class="btn-rnd">
            <h2>6</h2>
          </div>
        </div>
        <div class="btn-item">
          <div
            @click="keyPress('7')"
            class="btn-rnd">
            <h2>7</h2>
          </div>
        </div>
        <div class="btn-item">
          <div
            @click="keyPress('8')"
            class="btn-rnd">
            <h2>8</h2>
          </div>
        </div>
        <div class="btn-item">
          <div
            @click="keyPress('9')"
            class="btn-rnd">
            <h2>9</h2>
          </div>
        </div>
        <div class="btn-item">
          <div
            class="btn-rnd"
            @click="evalPin(passcodeString)">
            <font-awesome-icon
              icon="fa-solid fa-check"
              size="2x" />
          </div>
        </div>
        <div class="btn-item">
          <div
            @click="keyPress('0')"
            class="btn-rnd">
            <h2>0</h2>
          </div>
        </div>
        <div class="btn-item">
          <div
            class="btn-rnd"
            @click="clearPin">
            <font-awesome-icon
              icon="fa-solid fa-xmark"
              size="2x" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from '@vue/reactivity'

  const passcode = ref([]),
    passcodeString = ref(''),
    error = ref(false),
    pinTimeout = ref(null),
    corect = ref('1988')

  const keyPress = e => {
      passcode.value.push(e)
      passcodeString.value = passcode.value.join('')
    },
    evalPin = Pin => {
      if (Pin === corect.value) {
        emits('sucess')
        passcode.value = []
        passcodeString.value = ''
      } else {
        error.value = true
        passcode.value = []
        passcodeString.value = ''
      }
    },
    clearPin = () => {
      error.value = false
      passcode.value = []
      passcodeString.value = ''
    }
  const emits = defineEmits(['sucess'])
</script>

<style scoped>
  .tech-kp {
    height: 100%;
    margin-left: auto;
    width: 100%;
    background: var(--dark);
  }
  .keypad {
    width: 50%;
    max-width: 515px;
    height: 75%;
    max-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h1 {
    padding: 0.5em 0;
    /* margin-bottom: auto; */
  }
  .btn-con {
    height: 75%;
    width: 75%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  .btn-item {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-rnd {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .error {
    color: var(--fail);
  }
</style>
