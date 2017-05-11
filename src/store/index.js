import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation.js'
import actions from './action.js'
import getters from './getters.js'

const state = {
    latitude: '', // 当前位置纬度
	longitude: '', // 当前位置经度
    userInfo: null //用户信息
}

Vue.use(Vuex)


export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})