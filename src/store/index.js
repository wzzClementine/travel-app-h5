
import { createStore, createLogger } from 'vuex';

import home from '../store/modules/home.js';
import cover from '../store/modules/cover.js';


const debug = process.env.NODE_ENV !== 'production'

export default createStore({
    modules: {
        home,
        cover,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})