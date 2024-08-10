
// initial state (类似于react里面的reducer文件的defaultState定义数据)
const state = () => ({
    all: []
})

// getters
const getters = {}

// actions (类似于react里面的actionCreators 处理异步操作或复杂业务逻辑 通过commit实现数据状态改变 类似于dispatch)
const actions = {
    // async getAllProducts ({ commit }) {
        // const products = await shop.getProducts()
        // commit('setProducts', products)
    // }
}

// mutations (用于更改state 类似于react里面的reducer文件的setState)
// **** mutations 是唯一可以直接更改 state 的地方 ****
const mutations = {
    setProducts (state, products) {
        state.all = products
    },

    decrementProductInventory (state, { id }) {

    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}