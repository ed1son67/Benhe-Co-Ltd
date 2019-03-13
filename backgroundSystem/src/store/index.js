import Vue from 'vue'
import Vuex from 'vuex'

// import app from './modules/app'

const state = {
    isLogin: false
};


const mutations = {
    update: (state, datas) => {
        Object.assign(state, datas);
    },
};


Vue.use(Vuex)

export default new Vuex.Store({
	state,
    mutations
})