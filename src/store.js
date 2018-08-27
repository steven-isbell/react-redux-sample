import { createStore } from 'redux';

import standardReducerExample from './ducks/standardReducerExample';

const store = createStore(standardReducerExample);

export default store;

// ********** STORE WITH MIDDLEWARE **************

// import { createStore, applyMiddleware } from 'redux'; //Notice redux, not react-redux
// import standardReducerExample from './ducks/standardReducerExample';
// import promiseMiddleware from 'redux-promise-middleware';

// let storeMiddleware = applyMiddleware(
//   promiseMiddleware()
// )

// let store = createStore(standardReducerExample, storeMiddleware);

// export default store; //The store is used in index.js by the react-redux top level provider

// ********** STORE WITH MULTIPLE REDUCERS ********

// import { createStore, combineReducers } from 'redux'; //Notice redux, not react-redux
// import standardReducerExample from './ducks/standardReducerExample';
// import asyncReducerExample from './ducks/asyncReducerExample';
// import promiseMiddleware from 'redux-promise-middleware';

// let multipleReducers = combineReducers({ profile: standardReducerExample, people: asyncReducerExample });

// let store = createStore(combineReducers);

// export default store; //The store is used in index.js by the react-redux top level provider

// *********** STORE WITH MULTIPLE REDUCERS AND MIDDLEWARES AND DEVTOOLS *********
//////// Make sure to install the DEVTOOLS chrome extension here
/////// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

// import { createStore, combineReducers, applyMiddleware, compose } from 'redux'; //Notice redux, not react-redux
// import standardReducerExample from './ducks/standardReducerExample';
// import asyncReducerExample from './ducks/asyncReducerExample';
// import promiseMiddleware from 'redux-promise-middleware';

// let multipleReducers = combineReducers({
//   profile: standardReducerExample,
//   people: asyncReducerExample
// });

/////// DEVTOOLS wrap middlewares
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// let storeMiddleware = composeEnhancers(applyMiddleware(promiseMiddleware()));

// let store = createStore(multipleReducers, storeMiddleware);

// export default store; //The store is used in index.js by the react-redux top level provider
