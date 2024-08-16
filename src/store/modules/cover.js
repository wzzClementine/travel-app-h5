
import { fetchDatasetForHomePage } from '@/api/api.js';

// initial state (类似于react里面的reducer文件的defaultState定义数据)
const state = () => ({
    carouselData: []
})

// getters
const getters = {}

// actions (类似于react里面的actionCreators 处理异步操作或复杂业务逻辑 通过commit实现数据状态改变 类似于dispatch)
const actions = {

    // TODO: get dataset from server
    async getCarouselData({ commit }) {
        try {
            const response = await fetchDatasetForHomePage();
            console.log('cover carousel data', response);
            commit('setCoverCarouselData', response.data); // 假设 response.data 是包含图片和文字的数据数组
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    }

}

// mutations (用于更改state 类似于react里面的reducer文件的setState)
// **** mutations 是唯一可以直接更改 state 的地方 ****
const mutations = {
    setCoverCarouselData (state, data) {
        state.carouselData = data; // 将数据保存在 state 中
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}