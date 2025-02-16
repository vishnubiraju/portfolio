import { SET_TEST_API, SET_TEST_API_ERROR, SET_TEST_API_LOADING } from './actionTypes';

export const fetchTestData = () => {
  return async (dispatch) => {
    dispatch({
      type: 'FETCH_TEST_DATA_API',
      apiConfig: {
        method: 'GET',
        url: `/`, 
        onSuccess: ({data, store}) => {
          console.log("sucess",data)
          return store.dispatch({
            type: SET_TEST_API,
            payload: data
          })
        },
        onFailure: ({error, store}) => {
          console.log("error",error)
          return store.dispatch({
            type: SET_TEST_API_ERROR,
            payload: error
          })
        },
      },
    });
  };
};
