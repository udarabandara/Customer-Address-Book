import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import createRouter from './index'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(createRouter())
  .use(vuetify)
  .mount('#app')

