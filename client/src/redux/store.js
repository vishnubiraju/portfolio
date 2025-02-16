import { createStore as createStoreRedux, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer/index'; // Your combined reducers
import { thunk } from 'redux-thunk'; // Import Redux Thunk for async actions
import middleware from '../service/middleware';

const isClient = typeof window !== "undefined";

const composeEnhancers = isClient && window.__REACT_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REACT_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const createStore = (initialState) => {
    const enhancer = composeEnhancers(applyMiddleware(thunk, middleware));
    
    // Return the created store instance
    return createStoreRedux(
        rootReducer, // Your combined reducers
        initialState,
        enhancer
    );
}

export default createStore;  // Export store as default
