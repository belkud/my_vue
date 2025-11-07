    import { createRouter, createWebHistory } from 'vue-router'
    import HomePage from '../src/pages/HomePage.vue' // Пример компонента
    import AboutPage from '../src/pages/AboutPage.vue' // Пример компонента
    import TestPage from '../src/pages/TestPage.vue' // Пример компонента

    const routes = [
        {path: '/', component : HomePage}, // начальный компонент при загрузки страницы
        {path: '/about', component : AboutPage},
        {path: '/testPage', component : TestPage},
    ]

    const router = createRouter({
      history: createWebHistory(),
      routes
    })

    export  {router}