import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        app_list: {}
    },
    getters: {
        GetAppList: state => {
            return state.app_list;
        }
    },
    actions: {

    },
    mutations: {
        Launch (state, properties) {
            state.app_list["application/x-vnd.BeTest"] = properties;
        }
        // Launch: ({commit}, signature) => {
        //     state.app_list[signature] = ":)"
        // }
    }
})

export default store