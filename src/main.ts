import { createApp } from 'vue' //создание нового экземпляра приложения
import './style.css' 
import App from './App.vue'
import {router} from '../router' // Импортируйте файл роутера

let app = createApp(App)
app.use(router)
app.mount('#app')
// app.component ('BookList', BookList)




