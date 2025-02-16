import { combineReducers } from 'redux';
import testReducer from './testReducer'; // Your reducer for test data

const MainReducer = combineReducers({
    testReducer
})

const rootReducer = (state,action) => {
    return MainReducer(state, action);
    }

export default rootReducer;
