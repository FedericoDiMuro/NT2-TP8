import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: []
    },
    actions: {
        addUser({commit}, user){
            commit('add', user)
        }
    },
    mutations: {
        add(state, user){
            state.users.push(user)
        }
    }
})