import '@/shared/assets/main.sass'
import '@/shared/assets/variables.sass'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
