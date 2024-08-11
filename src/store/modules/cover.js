
import { fetchDatasetForHomePage } from '@/api/api.js';

// initial state (类似于react里面的reducer文件的defaultState定义数据)
const state = () => ({
    data: []
})

// getters
const getters = {}

// actions (类似于react里面的actionCreators 处理异步操作或复杂业务逻辑 通过commit实现数据状态改变 类似于dispatch)
const actions = {
    // async getAllProducts ({ commit }) {
    // const products = await shop.getProducts()
    // commit('setProducts', products)
    // }

    // TODO: get dataset for home page from server
    async getAllData({ commit }) {
        try {
            const response = await fetchDatasetForHomePage();
            console.log(response.data);
            commit('setHomePageData', response.data);
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    }
}

// mutations (用于更改state 类似于react里面的reducer文件的setState)
// **** mutations 是唯一可以直接更改 state 的地方 ****
const mutations = {
    setHomePageData (state, data) {
        state.all = data
    },

    // decrementProductInventory (state, { id }) {
    //
    // }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}