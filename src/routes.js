import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicio from './components/Inicio.vue'
import Formulario from './components/Formulario/index.vue'
import Http from './components/Http.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/Inicio' },
        { path: '/Inicio', component: Inicio },
        { path: '/Formulario', component: Formulario },
        { path: '/Personas', component: Http }
    ]
})