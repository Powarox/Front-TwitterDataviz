import {createStore} from 'vuex';

import dataset1 from './dataset1';
import dataset2 from './dataset2';
import dataset3 from './dataset3';

export const store = createStore({
    debug : true,
    modules: {
        dataset1,
        dataset2,
        dataset3,
      },
 })
