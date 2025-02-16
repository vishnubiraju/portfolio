import { SET_TEST_API, SET_TEST_API_ERROR, SET_TEST_API_LOADING } from '../actions/actionTypes';

const initialState = {
  testData: null,
  loading: false,
  error: null,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEST_API_LOADING:
      return { ...state, loading: true }; // Show loading state
    case SET_TEST_API:
      return { ...state, loading: false, testData: action.payload }; // Store the API data
    case SET_TEST_API_ERROR:
      return { ...state, loading: false, error: action.payload }; // Store the error message
    default:
      return state;
  }
};

export default testReducer;
