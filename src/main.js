import './assets/main.css'

import { createApp } from 'vue'

// @ts-ignore
import { LaTeXJSComponent } from 'latex.js'
import App from './App.vue'
import router from './router'
import { pinia } from './stores/instance.js'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')

customElements.define('latex-js', LaTeXJSComponent)
