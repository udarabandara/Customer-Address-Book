import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import createRouter from './index'

createApp(App)
  .use(createRouter())
  .mount('#app')

