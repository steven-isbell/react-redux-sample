import { createStore } from 'redux';

import reducer from './ducks/reducer';

const store = createStore(reducer);

export default store;
