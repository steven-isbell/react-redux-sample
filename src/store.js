import { createStore } from 'redux';

import reducer from './ducks/reducer';

const store = createStore(reducer);

export default store;

//STORE WITH MIDDLEWARE
// import { createStore, applyMiddleware } from 'redux'; //Notice redux, not react-redux
// import reducer from './reducer';
// import promiseMiddleware from 'redux-promise-middleware';

// let storeMiddleware = applyMiddleware(
//   promiseMiddleware()
// )

// let store = createStore(reducer, storeMiddleware);

// export default store; //The store is used in index.js by the react-redux top level provider

//STORE WITH MULTIPLE REDUCERS
// import { createStore, combineReducers } from 'redux'; //Notice redux, not react-redux
// import reducer from './reducer';
// import reducer2 from './reducer2';
// import promiseMiddleware from 'redux-promise-middleware';

// let multipleReducers = combineReducers({ profile: reducer, otherData: reducer2 });

// let store = createStore(combineReducers);

// export default store; //The store is used in index.js by the react-redux top level provider

//STORE WITH MULTIPLE REDUCERS AND MIDDLEWARES
// import { createStore, combineReducers, applyMiddleware } from 'redux'; //Notice redux, not react-redux
// import reducer from './reducer';
// import reducer2 from './reducer2';
// import promiseMiddleware from 'redux-promise-middleware';

// let multipleReducers = combineReducers({ profile: reducer, otherData: reducer2 });
// let storeMiddleware = applyMiddleware(promiseMiddleware())

// let store = createStore(combineReducers, storeMiddleware);

// export default store; //The store is used in index.js by the react-redux top level provider
