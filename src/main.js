import '@/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// routes added
app.use(router)

app.mount('#app')
