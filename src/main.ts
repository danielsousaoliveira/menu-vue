import './assets/css/main.css'
import 'floating-vue/dist/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'


library.add(fas);
const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(createPinia())
app.use(vuetify)
app.use(router)


app.mount('#app')
