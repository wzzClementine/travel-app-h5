
import { createStore, createLogger } from 'vuex'

import home from '../store/modules/home.js'


const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        home,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})