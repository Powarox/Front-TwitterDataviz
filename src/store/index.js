import {createStore} from 'vuex';

import data from './data';

export const store = createStore({
    debug : true,
    modules: {
        data,
      },
 })
