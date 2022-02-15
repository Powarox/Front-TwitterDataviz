import {createStore} from 'vuex';

import dataset1 from './dataset1';

export const store = createStore({
    debug : true,
    modules: {
        dataset1,
      },
 })
