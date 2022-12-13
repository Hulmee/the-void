import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import {
  faVuejs,
  faHtml5,
  faCss3,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, faVuejs, faHtml5, faCss3, faJsSquare)

import './assets/main.css'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
