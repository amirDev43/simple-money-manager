import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@/assets/custom.scss'
import router from './router/router'


// createApp(App).mount('#app')
const app = createApp(App)

console.log(app)

app.use(router)
app.mount('#app')
